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
  <div  style="background-color: #f2f2f2;">
    <form class="container d-flex justify-content-center align-items-center vh-100" >
      <div class="w-50">
        <h1>登入</h1>
        <div class="mb-3">
          <label for="email" class="form-label">信箱</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="請輸入信箱" v-model="user.username" required>        
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control" id="password" placeholder="請輸入密碼"  v-model="user.password" required>
        </div>      
        <button type="submit" class="btn bg-success text-dark bg-opacity-25 px-4" @click.prevent="login">登入</button>
      </div>
    </form>
  </div>
</template>

