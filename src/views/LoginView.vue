<script>
const {VITE_URL, VITE_PATH} = import.meta.env   

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    login() {               
      this.$http.post(`${VITE_URL}/v2/admin/signin`, this.user)
        .then((res) => {   
            // 將token 存入cookie                 
          const { token, expired } = res.data;                    
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          alert(res.data.message)
          this.$router.push('/admin');
        })
        .catch((err) => {  
          alert(err.response.data.message);
        });
      },
    }           
}
</script>

<template>
  <form class="container mt-5 d-flex justify-content-center">
    <div class="w-50 ">
      <h1>請先登入</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address" v-model="user.username" required>        
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password"  v-model="user.password" required>
      </div>      
      <button type="submit" class="btn btn-primary px-4" @click.prevent="login">登入</button>
    </div>
  </form>
</template>

