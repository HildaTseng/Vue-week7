import{_ as y,o as l,c as a,a as t,n as $,b as k,F as _,g as V,t as m,w as n,v as c,h as C,i as g,f as E,r as M,d as U}from"./index-63024686.js";import{M as L}from"./modal-79c1b1aa.js";const T={props:["pages","getProducts","getOrders"],methods:{updatePage(e){this.$emit("emitPages",e)}}},B={"aria-label":"Page navigation example"},I={class:"pagination"},A=t("span",{"aria-hidden":"true"},"«",-1),D=[A],R=["onClick"],O=t("span",{"aria-hidden":"true"},"»",-1),S=[O];function F(e,o,d,v,p,r){return l(),a("nav",B,[t("ul",I,[t("li",{class:$(["page-item",{disabled:!d.pages.has_pre}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:o[0]||(o[0]=k(s=>r.updatePage(d.pages.current_page-1),["prevent"]))},D)],2),(l(!0),a(_,null,V(d.pages.total_pages,s=>(l(),a("li",{class:$(["page-item",{active:s===d.pages.current_page}]),key:s+"page"},[t("a",{class:"page-link",href:"#",onClick:k(u=>r.updatePage(s),["prevent"])},m(s),9,R)],2))),128)),t("li",{class:$(["page-item",{disabled:!d.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:o[1]||(o[1]=k(s=>r.updatePage(d.pages.current_page+1),["prevent"]))},S)],2)])])}const H=y(T,[["render",F]]),z={props:["temp-product","updateProduct"]},K={class:"modal-dialog modal-xl"},j={class:"modal-content border-0"},q={class:"modal-header bg-dark text-white"},G={id:"productModalLabel",class:"modal-title"},J={key:0},Q={key:1},W=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},x={class:"mb-3"},tt=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),et=["src"],ot=t("h3",{class:"mb-3"},"多圖新增",-1),st={class:"mb-3"},dt=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),lt=["onUpdate:modelValue"],at=["onClick"],nt=["src"],rt={key:0},it={class:"col-sm-8"},ct={class:"mb-3"},ut=t("label",{label:"",for:"title",class:"form-label"},"標題",-1),pt={class:"row"},mt={class:"mb-3 col-md-6"},ht=t("label",{for:"category",class:"form-label"},"分類",-1),_t={class:"mb-3 col-md-6"},bt=t("p",{for:"category-campMode",class:"form-label"},"精選分類",-1),gt=t("label",{class:"form-check-label",for:"category-campMode-family"}," 家庭露營 ",-1),Pt=t("label",{class:"form-check-label",for:"category-campMode-bike"}," 機車露營 ",-1),ft=t("label",{class:"form-check-label",for:"category-campMode-hiking"}," 登山露營 ",-1),yt={class:"mb-3 col-md-6"},vt=t("label",{for:"price",class:"form-label"},"單位",-1),$t={class:"row"},kt={class:"mb-3 col-md-6"},Mt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Ut={class:"mb-3 col-md-6"},wt=t("label",{for:"price",class:"form-label"},"售價",-1),Vt=t("hr",null,null,-1),Ct={class:"mb-3"},Et=t("label",{for:"description",class:"form-label"},"產品描述",-1),Lt={class:"mb-3"},Nt=t("label",{for:"content",class:"form-label"},"說明內容",-1),Tt={class:"mb-3"},Bt={class:"form-check"},It=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),At={class:"modal-footer"},Dt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Rt(e,o,d,v,p,r){return l(),a("div",K,[t("div",j,[t("div",q,[t("h5",G,[e.isNew?(l(),a("span",J,"新增產品")):(l(),a("span",Q,"編輯產品"))]),W]),t("div",X,[t("div",Y,[t("div",Z,[t("div",x,[tt,n(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[c,e.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl},null,8,et)]),ot,Array.isArray(e.tempProduct.imagesUrl)?(l(),a(_,{key:0},[(l(!0),a(_,null,V(e.tempProduct.imagesUrl,(s,u)=>(l(),a("div",{class:"mb-1",key:u},[t("div",st,[dt,n(t("input",{"onUpdate:modelValue":b=>e.tempProduct.imagesUrl[u]=b,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,lt),[[c,e.tempProduct.imagesUrl[u]]]),t("button",{class:"btn btn-danger btn-sm d-block w-100",onClick:b=>e.tempProduct.imagesUrl.splice(u,1)}," 刪除圖片 ",8,at)]),t("img",{class:"img-fluid",src:e.tempProduct.imagesUrl[u]},null,8,nt)]))),128)),!e.tempProduct.imagesUrl.length||e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]?(l(),a("div",rt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):C("",!0)],64)):C("",!0)]),t("div",it,[t("div",ct,[ut,n(t("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.tempProduct.title=s),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[c,e.tempProduct.title]])]),t("div",pt,[t("div",mt,[ht,n(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.category=s),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[c,e.tempProduct.category]])]),t("div",_t,[bt,n(t("input",{class:"form-check-input",type:"checkbox",value:"家庭露營",id:"category-campMode-family","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category_campMode=s),name:"精選分類"},null,512),[[g,e.tempProduct.category_campMode]]),gt,n(t("input",{class:"form-check-input ms-3",type:"checkbox",value:"機車露營",id:"category-campMode-bike","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.category_campMode=s),name:"精選分類"},null,512),[[g,e.tempProduct.category_campMode]]),Pt,n(t("input",{class:"form-check-input ms-3",type:"checkbox",value:"登山露營",id:"category-campMode-hiking","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.category_campMode=s),name:"精選分類"},null,512),[[g,e.tempProduct.category_campMode]]),ft]),t("div",yt,[vt,n(t("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.unit=s),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[c,e.tempProduct.unit]])])]),t("div",$t,[t("div",kt,[Mt,n(t("input",{"onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.origin_price=s),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[c,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",Ut,[wt,n(t("input",{"onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.price=s),id:"price",type:"number",min:"0",class:"form-control"},null,512),[[c,e.tempProduct.price,void 0,{number:!0}]])])]),Vt,t("div",Ct,[Et,n(t("textarea",{"onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.description=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                            `,512),[[c,e.tempProduct.description]])]),t("div",Lt,[Nt,n(t("textarea",{"onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProduct.content=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                            `,512),[[c,e.tempProduct.content]])]),t("div",Tt,[t("div",Bt,[n(t("input",{"onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProduct.is_enabled=s),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[g,e.tempProduct.is_enabled]]),It])])])])]),t("div",At,[Dt,t("button",{type:"button",class:"btn btn-primary",onClick:o[13]||(o[13]=(...s)=>d.updateProduct&&d.updateProduct(...s))}," 確認 ")])])])}const Ot=y(z,[["render",Rt]]),St={props:["temp-product","delProduct"]},Ft={class:"modal-dialog"},Ht={class:"modal-content border-0"},zt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Kt={class:"modal-body"},jt={class:"text-danger"},qt={class:"modal-footer"},Gt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Jt(e,o,d,v,p,r){return l(),a("div",Ft,[t("div",Ht,[zt,t("div",Kt,[E(" 是否刪除 "),t("strong",jt,m(e.tempProduct.title),1),E(" 商品(刪除後將無法恢復)。 ")]),t("div",qt,[Gt,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...s)=>d.delProduct&&d.delProduct(...s))}," 確認刪除 ")])])])}const Qt=y(St,[["render",Jt]]),{VITE_URL:P,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"hilda88",BASE_URL:"/Vue-week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let h="",w="";const Wt={data(){return{isNew:!1,products:[],tempProduct:{imagesUrl:[],category_campMode:[]},pages:{},currentPage:1}},methods:{getProducts(e=1){this.currentPage=e,this.$http.get(`${P}/api/${f}/admin/products/?page=${e}`).then(o=>{this.pages=o.data.pagination,this.products=o.data.products}).catch(o=>{alert(o.response.data.message)})},updateProduct(){let e=`${P}/api/${f}/admin/product`,o="post";this.isNew||(e=`${P}/api/${f}/admin/product/${this.tempProduct.id}`,o="put"),this.tempProduct.category_campMode.length>0?(console.log("OK"),this.$http[o](e,{data:this.tempProduct}).then(d=>{alert(d.data.message),h.hide(),this.getProducts(this.currentPage)}).catch(d=>{alert(d.data.message)})):(alert("精選分類至少擇一"),h.show())},openModal(e,o){e==="new"?(this.tempProduct={imagesUrl:[],category_campMode:[]},this.isNew=!0,h.show()):e==="edit"?(this.tempProduct={...o,category_campMode:o.category_campMode||[]},this.isNew=!1,h.show()):e==="delete"&&(this.tempProduct={...o},w.show())},delProduct(){this.$http.delete(`${P}/api/${f}/admin/product/${this.tempProduct.id}`).then(e=>{alert(e.data.message),w.hide(),this.getProducts()}).catch(e=>{alert(e.response.data.message)})}},components:{pagination:H,productModel:Ot,deleteProductModal:Qt},mounted(){h=new L(document.getElementById("productModal")),w=new L(document.getElementById("delProductModal")),this.getProducts()}},Xt={class:"container"},Yt={class:"text-end mt-4"},Zt={class:"table mt-4"},xt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"200"}," 編輯 ")])],-1),te={class:"text-right"},ee={class:"text-right"},oe={key:0,class:"text-success"},se={key:1},de={class:"btn-group"},le=["onClick"],ae=["onClick"],ne={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},re={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"};function ie(e,o,d,v,p,r){const s=M("pagination"),u=M("product-model"),b=M("delete-product-modal");return l(),a(_,null,[t("div",Xt,[t("div",Yt,[t("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=i=>r.openModal("new"))}," 建立新的產品 ")]),t("table",Zt,[xt,t("tbody",null,[(l(!0),a(_,null,V(p.products,i=>(l(),a("tr",{key:i.id},[t("td",null,m(i.category),1),t("td",null,m(i.title),1),t("td",te,m(i.origin_price),1),t("td",ee,m(i.price),1),t("td",null,[i.is_enabled?(l(),a("span",oe,"啟用")):(l(),a("span",se,"未啟用"))]),t("td",null,[t("div",de,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:N=>r.openModal("edit",i)}," 編輯 ",8,le),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:N=>r.openModal("delete",i)}," 刪除 ",8,ae)])])]))),128))])]),U(s,{pages:p.pages,onEmitPages:r.getProducts},null,8,["pages","onEmitPages"])]),t("div",ne,[U(u,{"temp-product":p.tempProduct,"update-product":r.updateProduct},null,8,["temp-product","update-product"])],512),t("div",re,[U(b,{"temp-product":p.tempProduct,"del-product":r.delProduct},null,8,["temp-product","del-product"])],512)],64)}const pe=y(Wt,[["render",ie]]);export{pe as default};