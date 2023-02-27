<template>
    <ul class="nav justify-content-center bg-success bg-opacity-25 text-dark  align-items-center">
        <li class="nav-item">
            <router-link to="/admin" class="nav-link active fs-2 text-dark" >享露</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin/products" class="nav-link text-dark ">商品列表</router-link>            
        </li>
        <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link text-dark ">訂單管理</router-link>       
        </li>
        <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link text-dark ">優惠券</router-link>       
        </li>
        <!-- <li class="nav-item">
            <a class="nav-link text-dark  ">貼文</a>
        </li> -->
        <li class="nav-item">
            <a href="#" class="nav-link text-dark" @click.prevent="logout">登出</a>
        </li>
    </ul>
    <router-view></router-view>
    
</template>

<script>
const {VITE_URL, VITE_PATH} = import.meta.env   

export default {   
    created() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,  "$1");
        this.$http.defaults.headers.common["Authorization"] = token;  
        this.$http.post(`${VITE_URL}/v2/api/user/check`)
        .then((res) => {     
          //alert("驗證成功")
        })
        .catch((err) => {  
          alert("驗證失敗")
        });
    },
    methods: {
        logout() {
            this.$http.post(`${VITE_URL}/v2/logout`)
            .then((res) => {                 
                alert(res.data.message)
                this.$router.push('/');
            })
            .catch((err) => {  
                alert(err.response.data.message);
            });
        }
    },
}
</script>