<template>
    <div class="container">
        <div class="text-end mt-4">
            <button class="btn btn-primary" @click="openModal('new')">
                建立新的文章
            </button>
        </div>
        <table class="table mt-4">
            <thead>
              <tr>
                <th style="width: 250px">標題</th>
                <th style="width: 100px">作者</th>
                <th>描述</th>
                <th style="width: 150px">建立時間</th>
                <th style="width: 100px">是否公開</th>
                <th style="width: 120px">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="article in articles" :key="article.id">
                <td>{{ article.title }}</td>
                <td>{{ article.author }}</td>
                <td>{{ article.description }}</td>
                <td>{{ turnDate(article.create_at) }}</td>
                <td>
                  <span v-if="article.isPublic">已上架</span>
                  <span v-else>未上架</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      type="button"
                      @click="openModal('edit', article)"
                    >
                      編輯
                    </button>
                    <button
                      class="btn btn-outline-danger btn-sm"
                      type="button"
                      @click="openModal('delete', article)"
                    >
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>
        <!-- 查看文章modal -->  
        <div class="modal fade" id="articleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  ref="modal">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span v-if="isNew">新增貼文</span>
                            <span v-else>編輯貼文</span>
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label for="title" class="form-label">標題</label>
                                    <input type="text" class="form-control" id="title"  v-model="tempArticle.title" placeholder="請輸入標題"/>
                                </div>
                                <div class="mb-3">
                                    <label for="image" class="form-label">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" v-model="tempArticle.imageUrl" placeholder="請輸入圖片連結" />
                                </div>
                                <div class="mb-3">
                                    <label for="author" class="form-label">作者</label>
                                    <input type="text" class="form-control" id="author" v-model="tempArticle.author" placeholder="請輸入標題"/>
                                </div>
                                <div class="mb-3">
                                    <label for="create_at">文章建立日期</label>
                                    <input type="date" class="form-control" id="create_at" v-model="tempArticle.create_at"/>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <label for="tag" class="form-label">標籤</label>
                                <div class="row gx-1 mb-3">
                                    <div class="col-md-2 mb-1" v-for="(label, key) in tempArticle.tag" :key="key">
                                        <div class="input-group input-group-sm">
                                            <input type="text" class="form-control form-control"  id="tag"  v-model="tempArticle.tag[key]" placeholder="請輸入標籤"/>
                                            <button  type="button" class="btn btn-outline-danger" @click="tempArticle.tag.splice(key, 1)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-2 mb-1" v-if="!tempArticle.tag.length || tempArticle.tag[tempArticle.tag.length - 1]">
                                        <button  class="btn btn-outline-primary btn-sm d-block w-100"  type="button"  @click="tempArticle.tag.push('')">新增標籤</button>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">文章描述</label>
                                    <textarea  type="text" class="form-control"  id="description" v-model="tempArticle.description" placeholder="請輸入文章描述"></textarea>
                                </div>   
                                <div class="mb-3">
                                    <label for="content" class="form-label">文章內容</label>
                                    <textarea  type="text" class="form-control"  id="content" v-model="tempArticle.content" placeholder="請輸入文章內容"></textarea>
                                </div>                            
                                <div class="mb-3">
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" v-model="tempArticle.isPublic" id="isPublic"/>
                                      <label class="form-check-label" for="isPublic"> 是否公開 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateArticles"> 確認 </button>
                    </div>
                </div>
            </div>
        </div>
        <!--刪除文章modal -->
        <div class="modal fade" id="delArticleModal" tabindex="-1" aria-labelledby="delArticleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-danger">
                        <h2 class="modal-title fs-4 text-white" id="exampleModalLabel">刪除文章</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" >
                        是否刪除<strong class="text-danger">{{ tempArticle.title }}</strong> 文章(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="delArticle">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

const {VITE_URL, VITE_PATH} = import.meta.env  

let articleModal = "";  
let delArticleModal = ""; 

export default {
    data() {
        return {
            articles: [],
            pages: {},
            tempArticle:  {
                tag: [''],
            },
            currentPage: 1,
            isNew: false,
            create_at: '',   //放時間戳
        }
    },
    methods: {
        turnDate(time) {    // 將時間戳轉為 YYYY-MM-DD
            const newDate = new Date(time * 1000);
            const year = newDate.getFullYear();
            const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
            const day = newDate.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        dueDate(create_at) { // 將YYYY-MM-DD 轉為時間戳
            this.tempArticle.create_at =  Math.floor(new Date(create_at).getTime() / 1000)
        },
        getArticles(page = 1) {
            this.currentPage = page 
            this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/articles?page=${page}`)  
                .then((res) => {                        
                    this.articles = res.data.articles;     
                    this.pages =  res.data.pagination; 
                    console.log(this.articles)
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        openModal(isNew, article) {
            
            if (isNew === 'new') {
                this.tempArticle = {
                    isPublic: false,
                    tag: [],
                };
                this.isNew = true;
                articleModal.show();      
            } else if (isNew === 'edit') {
                this.tempArticle = { 
                    ...article,
                    tag: article.tag || [],
                    isPublic: article.isPublic || false,
                };
                this.isNew = false;
                articleModal.show();     
                this.tempArticle.create_at = this.turnDate(article.create_at);
            } else if (isNew === 'delete') { 
                this.tempArticle = { ...article }; 
                delArticleModal.show();  
            };     
           
        },
        updateArticles() {
    
            //預設將API設為post
            let url = `${VITE_URL}/api/${VITE_PATH}/admin/article`;
            let http = 'post';

            //判斷不是新增資料 更改變數的值為put
            if (!this.isNew) {
                url = `${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`;
                http = 'put'
            };

            //將到期日轉換為時間戳
            if (this.tempArticle.create_at) {
                this.dueDate(this.tempArticle.create_at)
                console.log( this.dueDate)
            }
            
            //將參數帶入axios
            this.$http [http](url, { data: this.tempArticle })
                .then((res) => {                      
                    alert(res.data.message);
                    articleModal.hide();  
                    this.getArticles();
                })
                .catch((err) => {
                    alert(err.data.message);
                });

            //將時間戳轉換回日期格式
            if (this.tempArticle.create_at) {
                    this.turnDate(this.tempArticle.create_at)
                }
        },     
        delArticle() {
            this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`)  
                .then((res) => {
                    alert(res.data.message)   
                    delArticleModal.hide()  
                    this.getArticles(this.currentPage)                    
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        }  
    },
    mounted() {
        articleModal = new Modal(document.getElementById('articleModal'));
        delArticleModal = new Modal(document.getElementById('delArticleModal'));      
        this.getArticles();
    },
}
</script>