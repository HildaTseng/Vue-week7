import{_ as u,r as i,o as h,c as p,a as t,d as s,e as n,b as m,F as k,f as c}from"./index-53a7fb00.js";const{VITE_URL:l,VITE_PATH:B}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"hilda88",BASE_URL:"/Vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},v={created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.$http.post(`${l}/v2/api/user/check`).then(a=>{}).catch(a=>{alert("驗證失敗")})},methods:{logout(){this.$http.post(`${l}/v2/logout`).then(e=>{alert(e.data.message),this.$router.push("/")}).catch(e=>{alert(e.response.data.message)})}}},f={class:"nav justify-content-center bg-success bg-opacity-25 text-dark align-items-center"},x={class:"nav-item"},$={class:"nav-item"},g={class:"nav-item"},V={class:"nav-item"},E={class:"nav-item"};function T(e,a,w,R,b,r){const o=i("router-link"),d=i("router-view");return h(),p(k,null,[t("ul",f,[t("li",x,[s(o,{to:"/admin",class:"nav-link active fs-2 text-dark"},{default:n(()=>[c("享露")]),_:1})]),t("li",$,[s(o,{to:"/admin/products",class:"nav-link text-dark"},{default:n(()=>[c("商品列表")]),_:1})]),t("li",g,[s(o,{to:"/admin/orders",class:"nav-link text-dark"},{default:n(()=>[c("訂單管理")]),_:1})]),t("li",V,[s(o,{to:"/admin/coupons",class:"nav-link text-dark"},{default:n(()=>[c("優惠券")]),_:1})]),t("li",E,[t("a",{href:"#",class:"nav-link text-dark",onClick:a[0]||(a[0]=m((..._)=>r.logout&&r.logout(..._),["prevent"]))},"登出")])]),s(d)],64)}const D=u(v,[["render",T]]);export{D as default};
