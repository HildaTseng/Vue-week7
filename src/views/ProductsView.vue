<template>
    <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary" @click="openModal('new')">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="200">
                編輯
              </th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-right">{{ item.origin_price }}</td>
                <td class="text-right">{{ item.price }}</td>
                <td>
                  <span class="text-success"  v-if="item.is_enabled">啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                      編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                      刪除
                    </button>
                  </div>
                </td>
            </tr>
            
          </tbody>
        </table>        
        <!-- 分頁 -->        
        <pagination :pages="pages" :get-products="getProducts"></pagination>

      </div>
      <!-- 新增/編輯Modal -->
      <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
      aria-hidden="true">
        <product-model :temp-product="tempProduct" :update-product="updateProduct"></product-model>
      </div>

      <!-- 刪除Model -->
      <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
      aria-labelledby="delProductModalLabel" aria-hidden="true">
        <delete-product-modal :temp-product="tempProduct" :del-product="delProduct"></delete-product-modal>      
      </div>
      
</template>
<script>
    import pagination from "@/components/pagination.vue";
    import productModel from "@/components/product-model.vue";
    import deleteProductModal from "@/components/delete-product-modal.vue";
    
    import Modal from 'bootstrap/js/dist/modal';

    const {VITE_URL, VITE_PATH} = import.meta.env   
    
    //BS model 取用
    let productModal = "";  
    let delProductModal = ""; 
    
    export default {
        data() {
            return {
                isNew: false,  //判斷是否為新增資料
                products: [],   //全部產品列表
                tempProduct: {  //單一產品資料
                    imagesUrl: [],
                },
                pages:{},   //存放分頁資料
            }
        },
        // 方法集
        methods: {        
            //取得產品資料
            getProducts(page = 1) { //預設值處理
                this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/products/?page=${page}`)  //用參數決定顯示在第幾頁
                    .then((res) => { 
                        this.pages =  res.data.pagination;  //將page資料儲存
                        this.products = res.data.products;  //將資料寫在畫面上              
                    })
                    .catch((err) => {
                        alert(err.response.data.message);
                    });
            },
            //更新資料
            updateProduct() {
    
                //預設將API設為post
                let url = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
                let http = 'post';
    
                //判斷不是新增資料 更改變數的值為put
                if (!this.isNew) {
                    url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
                    http = 'put'
                };
                //將參數帶入axios
                this.$http [http](url, { data: this.tempProduct })
                    .then((res) => {
                        alert(res.data.message);
                        productModal.hide();    //新增或編輯資料成功時 關閉model
                        this.getProducts(); //更新產品列表
                    })
                    .catch((err) => {
                        alert(err.data.message);
                    });
            },
            //開啟model  判斷開啟哪種model
            openModal(isNew, item) {
                
                if (isNew === 'new') {  //新增model
                    this.tempProduct = {    //顯示產品資訊表單
                        imagesUrl: [],
                    };
                    this.isNew = true; //新增資料 執行更新資料函式 post API
                    productModal.show();         //產品model開啟
                } else if (isNew === 'edit') {  //編輯model
                    this.tempProduct = { ...item }; //複製資料
                    this.isNew = false;   //不是新資料 執行更新資料函式 put API
                    productModal.show();       //產品model開啟
                } else if (isNew === 'delete') {  //刪除model
                    this.tempProduct = { ...item }; 
                    delProductModal.show();   //刪除model開啟
                };

                
                      
            },
            //刪除產品
            delProduct() {
                this.$http .delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`)
                    .then((res) => {
                        alert(res.data.message);
                        delProductModal.hide(); //成功刪除時 關閉model
                        this.getProducts(); //更新產品列表
                    })
                    .catch((err) => {
                        alert(err.response.data.message);
                    });
            },
    
        },
        // 元件
        components:{
            pagination,  
            productModel,
            deleteProductModal,            
        },
        // 生命週期
        mounted(){
            //取BS JS model元素
            productModal = new Modal(document.getElementById('productModal'));
            delProductModal = new Modal(document.getElementById('delProductModal'));        
           this.getProducts()
        }
    }
    </script>