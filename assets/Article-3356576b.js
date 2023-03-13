import{M as f}from"./modal-79c1b1aa.js";import{_ as w,o as i,c as a,a as t,F as y,g as v,w as d,v as c,h as k,i as M,f as x,t as p}from"./index-63024686.js";const{VITE_URL:h,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"hilda88",BASE_URL:"/Vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let _="",b="";const V={data(){return{articles:[],pages:{},tempArticle:{tag:[""]},currentPage:1,isNew:!1,create_at:""}},methods:{turnDate(o){const e=new Date(o*1e3),r=e.getFullYear(),g=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");return`${r}-${g}-${s}`},dueDate(o){this.tempArticle.create_at=Math.floor(new Date(o).getTime()/1e3)},getArticles(o=1){this.currentPage=o,this.$http.get(`${h}/api/${u}/admin/articles?page=${o}`).then(e=>{this.articles=e.data.articles,this.pages=e.data.pagination,console.log(this.articles)}).catch(e=>{alert(e.response.data.message)})},openModal(o,e){o==="new"?(this.tempArticle={isPublic:!1,tag:[]},this.isNew=!0,_.show()):o==="edit"?(this.tempArticle={...e,tag:e.tag||[],isPublic:e.isPublic||!1},this.isNew=!1,_.show(),this.tempArticle.create_at=this.turnDate(e.create_at)):o==="delete"&&(this.tempArticle={...e},b.show())},updateArticles(){let o=`${h}/api/${u}/admin/article`,e="post";this.isNew||(o=`${h}/api/${u}/admin/article/${this.tempArticle.id}`,e="put"),this.tempArticle.create_at&&(this.dueDate(this.tempArticle.create_at),console.log(this.dueDate)),this.$http[e](o,{data:this.tempArticle}).then(r=>{alert(r.data.message),_.hide(),this.getArticles()}).catch(r=>{alert(r.data.message)}),this.tempArticle.create_at&&this.turnDate(this.tempArticle.create_at)},delArticle(){this.$http.delete(`${h}/api/${u}/admin/article/${this.tempArticle.id}`).then(o=>{alert(o.data.message),b.hide(),this.getArticles(this.currentPage)}).catch(o=>{alert(o.response.data.message)})}},mounted(){_=new f(document.getElementById("articleModal")),b=new f(document.getElementById("delArticleModal")),this.getArticles()}},D={class:"container"},C={class:"text-end mt-4"},P={class:"table mt-4"},U=t("thead",null,[t("tr",null,[t("th",{style:{width:"250px"}},"標題"),t("th",{style:{width:"100px"}},"作者"),t("th",null,"描述"),t("th",{style:{width:"150px"}},"建立時間"),t("th",{style:{width:"100px"}},"是否公開"),t("th",{style:{width:"120px"}},"編輯")])],-1),L={key:0},E={key:1},T={class:"btn-group"},S=["onClick"],B=["onClick"],I={class:"modal fade",id:"articleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog modal-xl",role:"document"},R={class:"modal-content border-0"},F={class:"modal-header bg-dark text-white"},H={class:"modal-title",id:"exampleModalLabel"},O={key:0},z={key:1},Y=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},q={class:"row"},G={class:"col-sm-4"},J={class:"mb-3"},K=t("label",{for:"title",class:"form-label"},"標題",-1),Q={class:"mb-3"},W=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),X={class:"mb-3"},Z=t("label",{for:"author",class:"form-label"},"作者",-1),$={class:"mb-3"},tt=t("label",{for:"create_at"},"文章建立日期",-1),et={class:"col-sm-8"},lt=t("label",{for:"tag",class:"form-label"},"標籤",-1),st={class:"row gx-1 mb-3"},ot={class:"input-group input-group-sm"},it=["onUpdate:modelValue"],at=["onClick"],nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[t("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),dt=[nt],ct={key:0,class:"col-md-2 mb-1"},rt={class:"mb-3"},mt=t("label",{for:"description",class:"form-label"},"文章描述",-1),pt={class:"mb-3"},ht=t("label",{for:"content",class:"form-label"},"文章內容",-1),ut={class:"mb-3"},_t={class:"form-check"},bt=t("label",{class:"form-check-label",for:"isPublic"}," 是否公開 ",-1),gt={class:"modal-footer"},At=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1),ft={class:"modal fade",id:"delArticleModal",tabindex:"-1","aria-labelledby":"delArticleModalLabel","aria-hidden":"true"},yt={class:"modal-dialog modal-dialog-centered"},vt={class:"modal-content"},xt=t("div",{class:"modal-header bg-danger"},[t("h2",{class:"modal-title fs-4 text-white",id:"exampleModalLabel"},"刪除文章"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),wt={class:"modal-body"},kt={class:"text-danger"},Mt={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Dt(o,e,r,g,s,n){return i(),a("div",D,[t("div",C,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=l=>n.openModal("new"))}," 建立新的文章 ")]),t("table",P,[U,t("tbody",null,[(i(!0),a(y,null,v(s.articles,l=>(i(),a("tr",{key:l.id},[t("td",null,p(l.title),1),t("td",null,p(l.author),1),t("td",null,p(l.description),1),t("td",null,p(n.turnDate(l.create_at)),1),t("td",null,[l.isPublic?(i(),a("span",L,"已上架")):(i(),a("span",E,"未上架"))]),t("td",null,[t("div",T,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:m=>n.openModal("edit",l)}," 編輯 ",8,S),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:m=>n.openModal("delete",l)}," 刪除 ",8,B)])])]))),128))])]),t("div",I,[t("div",N,[t("div",R,[t("div",F,[t("h5",H,[s.isNew?(i(),a("span",O,"新增貼文")):(i(),a("span",z,"編輯貼文"))]),Y]),t("div",j,[t("div",q,[t("div",G,[t("div",J,[K,d(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=l=>s.tempArticle.title=l),placeholder:"請輸入標題"},null,512),[[c,s.tempArticle.title]])]),t("div",Q,[W,d(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[2]||(e[2]=l=>s.tempArticle.imageUrl=l),placeholder:"請輸入圖片連結"},null,512),[[c,s.tempArticle.imageUrl]])]),t("div",X,[Z,d(t("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":e[3]||(e[3]=l=>s.tempArticle.author=l),placeholder:"請輸入標題"},null,512),[[c,s.tempArticle.author]])]),t("div",$,[tt,d(t("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":e[4]||(e[4]=l=>s.tempArticle.create_at=l)},null,512),[[c,s.tempArticle.create_at]])])]),t("div",et,[lt,t("div",st,[(i(!0),a(y,null,v(s.tempArticle.tag,(l,m)=>(i(),a("div",{class:"col-md-2 mb-1",key:m},[t("div",ot,[d(t("input",{type:"text",class:"form-control form-control",id:"tag","onUpdate:modelValue":A=>s.tempArticle.tag[m]=A,placeholder:"請輸入標籤"},null,8,it),[[c,s.tempArticle.tag[m]]]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:A=>s.tempArticle.tag.splice(m,1)},dt,8,at)])]))),128)),!s.tempArticle.tag.length||s.tempArticle.tag[s.tempArticle.tag.length-1]?(i(),a("div",ct,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:e[5]||(e[5]=l=>s.tempArticle.tag.push(""))},"新增標籤")])):k("",!0)]),t("div",rt,[mt,d(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[6]||(e[6]=l=>s.tempArticle.description=l),placeholder:"請輸入文章描述"},null,512),[[c,s.tempArticle.description]])]),t("div",pt,[ht,d(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[7]||(e[7]=l=>s.tempArticle.content=l),placeholder:"請輸入文章內容"},null,512),[[c,s.tempArticle.content]])]),t("div",ut,[t("div",_t,[d(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=l=>s.tempArticle.isPublic=l),id:"isPublic"},null,512),[[M,s.tempArticle.isPublic]]),bt])])])])]),t("div",gt,[At,t("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=(...l)=>n.updateArticles&&n.updateArticles(...l))}," 確認 ")])])])],512),t("div",ft,[t("div",yt,[t("div",vt,[xt,t("div",wt,[x(" 是否刪除"),t("strong",kt,p(s.tempArticle.title),1),x(" 文章(刪除後將無法恢復)。 ")]),t("div",Mt,[Vt,t("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=(...l)=>n.delArticle&&n.delArticle(...l))},"確認刪除")])])])])])}const Ut=w(V,[["render",Dt]]);export{Ut as default};
