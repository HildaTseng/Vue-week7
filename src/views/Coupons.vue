<template>
    <div class="container ">
        <div class="text-end mt-4">
            <button class="btn btn-primary" @click="openModal('new')">
              建立新優惠券
            </button>
        </div>
        <table class="table w-100 mt-4">
            <thead>
                <tr class="fs-5">
                    <th>名稱</th>
                    <th>折扣百分比</th>
                    <th>到期日</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coupon in coupons" :key="coupon.id">                    
                    <td >{{ coupon.title }}</td>
                    <td >{{ coupon.percent }} %</td>
                    <td >{{ turnDate(coupon.due_date) }}</td>
                    <td >
                        <span v-if="coupon.is_enabled" class="text-success">已啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td >
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', coupon)" >檢視</button>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', coupon)">刪除</button>
                        </div>
                    </td>
                    
                </tr>
            </tbody>
        </table>
        <!-- 分頁 -->
        <pagination :pages="pages" @emitPages="getCoupons"></pagination>

        <!-- 查看訂單modal -->   
        <div class="modal fade" id="couponModal" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header bg-success text-dark bg-opacity-25">
                        <h2 class="modal-title fs-4" id="exampleModalLabel">
                            <span v-if="isNew">新增優惠卷</span>
                            <span v-else>編輯優惠卷</span>
                        </h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="title" class="form-label">優惠券名稱</label>
                            <input type="text" class="form-control" id="title" placeholder="請輸入優惠券名稱" v-model="tempCoupon.title">
                        </div>
                        <div class="mb-3">
                            <label for="coupon-code" class="form-label">優惠券代碼</label>
                            <input type="text" class="form-control" id="coupon-code" placeholder="請輸入優惠券代碼" v-model="tempCoupon.code">
                        </div>
                        <div class="mb-3">
                            <label for="discount" class="form-label">折扣百分比</label>
                            <input type="number" class="form-control" id="discount" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                        </div>
                        <div class="mb-3">
                            <label for="due_date" class="form-label">到期日</label>
                            <input type="date" class="form-control" id="due_date" v-model="tempCoupon.due_date"  >
                        </div>    
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                    :true-value="1"
                                    :false-value="0"
                                    v-model="tempCoupon.is_enabled" id="is_enabled">
                            <label class="form-check-label" for="is_enabled">
                                是否啟用
                            </label>
                        </div>                    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
                    </div>
                </div>
            </div>         
        </div>

        <!--刪除訂單modal -->
        <div class="modal fade" id="delCouponModal" tabindex="-1" aria-labelledby="delCouponModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-danger">
                        <h2 class="modal-title fs-4 text-white" id="exampleModalLabel">刪除優惠券</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" >
                        是否刪除<strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="delCoupon">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import pagination from "@/components/pagination.vue";
import Modal from 'bootstrap/js/dist/modal';

const {VITE_URL, VITE_PATH} = import.meta.env   

let couponModal = "";  
let delCouponModal = ""; 

export default {
    data() {
        return {
            coupons: [],
            pages: {},
            tempCoupon:  {
                code: "",
                is_enabled: 1,
                percent: 100,
                title: "",
            },
            currentPage: 1,
            isNew: false,
            due_date: '',   //放時間戳
        }
    },
    methods: {
        getCoupons(page = 1) {
            this.currentPage = page 
            this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons/?page=${page}`)  
                .then((res) => {                        
                    this.coupons = res.data.coupons;     
                    this.pages =  res.data.pagination; 
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        turnDate(time) {    // 將時間戳轉為 YYYY-MM-DD
            const newDate = new Date(time * 1000);
            const year = newDate.getFullYear();
            const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
            const day = newDate.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        dueDate(due_date) { // 將YYYY-MM-DD 轉為時間戳
            this.tempCoupon.due_date =  Math.floor(new Date(due_date).getTime() / 1000)
        },
        openModal(isNew, coupon) {
            if (isNew === 'new') { 
                this.tempCoupon = { }; 
                this.isNew = true; 
                couponModal.show();         
            } else if (isNew === 'edit') { 
                this.tempCoupon = { ...coupon };
                this.tempCoupon.due_date = this.turnDate(coupon.due_date);
                this.isNew = false;   
                couponModal.show();       
            } else if (isNew === 'delete') { 
                this.tempCoupon = { ...coupon }; 
                delCouponModal.show();  
            };     
        },
        updateCoupon() {
    
            //預設將API設為post
            let url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
            let http = 'post';

            //判斷不是新增資料 更改變數的值為put
            if (!this.isNew) {
                url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`;
                http = 'put'
            };

            //將到期日轉換為時間戳
            if (this.tempCoupon.due_date) {
                this.dueDate(this.tempCoupon.due_date)
            }
             
            //將參數帶入axios
            this.$http [http](url, { data: this.tempCoupon })
                .then((res) => {                      
                    alert(res.data.message);
                    couponModal.hide();  
                    this.getCoupons();
                })
                .catch((err) => {
                    alert(err.data.message);
                });

           //將時間戳轉換回日期格式
           if (this.tempCoupon.due_date) {
                this.turnDate(this.tempCoupon.due_date)
            }
        },       
       
        delCoupon() {
            this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`)  
                .then((res) => {
                    alert(res.data.message)   
                    delCouponModal.hide()  
                    this.getCoupons(this.currentPage)                    
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        }
        
    },
    components:{
            pagination,                         
        },
    mounted() {
        couponModal = new Modal(document.getElementById('couponModal'));
        delCouponModal = new Modal(document.getElementById('delCouponModal'));        
        this.getCoupons()
    },
}
</script>