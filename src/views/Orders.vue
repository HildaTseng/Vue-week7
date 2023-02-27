<template>
    <div class="container  my-5">
        <table class="table">
            <thead>
                <tr class="fs-5">
                    <th>購買時間</th>
                    <th>Email</th>
                    <th>購買款項</th>
                    <th>應付金額</th>
                    <th>是否付款</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td style="width: 150px;">{{ turnDate(order.create_at) }}</td>
                    <td>{{ order.user.email }}</td>
                    <td style="width: 250px;">
                        <ul class="list-unstyled">
                            <li v-for="(item, i) in order.products" :key="i">
                                {{ item.product.title}} 數量：{{ item.qty }} {{ item.product.unit}}</li>
                        </ul>                        
                    </td>
                    <td style="width: 150px;">{{ toCurrency(order.total) }}</td>
                    <td style="width: 150px;">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox"  
                                :id="`paidSwitchCheck${order.id}`" v-model="order.is_paid">
                            <label class="form-check-label" :for="`paidSwitchCheck${order.id}`">
                                <span v-if="order.is_paid">已付款</span>
                                <span v-else>未付款</span>
                            </label>
                        </div>
                    </td>
                    <td style="width: 150px;">
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="openOrderModal(order)" >檢視</button>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelModal(order)">刪除</button>
                        </div>
                    </td>
                    
                </tr>
            </tbody>
        </table>
        <!-- 分頁 -->
        <pagination :pages="pages" @emitPages="getOrders"></pagination>

        <!-- 查看訂單modal -->   
        <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-success text-dark bg-opacity-25">
                        <h2 class="modal-title fs-4" id="exampleModalLabel">訂單內容</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-4">
                                <h3 class="fs-4 fw-bold mb-4">買家資料</h3>                               
                                <table class="table">
                                    <tbody v-if="tempOrder.user">
                                        <tr>                                            
                                            <th>姓名</th>
                                            <td>{{ tempOrder.user.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{ tempOrder.user.email }}</td>
                                        </tr>
                                        <tr>
                                            <th>電話</th>
                                            <td>{{ tempOrder.user.tel }}</td>
                                        </tr>
                                        <tr>
                                            <th>地址</th>
                                            <td>{{ tempOrder. user.address }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-4">
                                <h3 class="fs-4 fw-bold mb-4">訂單細節</h3>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th>訂單編號</th>
                                            <td>{{ tempOrder.id }}</td>
                                        </tr>
                                        <tr>
                                            <th>下單時間</th>
                                            <td>{{ turnDate(tempOrder.create_at) }}</td>
                                        </tr>
                                        <tr>
                                            <th>付款時間</th>
                                            <td>
                                                <span v-if="tempOrder.paid_date">{{ turnDate(tempOrder.paid_date) }}</span>
                                                <span v-else>時間不正確</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>付款狀態</th>
                                            <td>
                                                <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                                                <span v-else>未付款</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>總金額</th>
                                            <td>{{ toCurrency(tempOrder.total) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="form-check d-flex justify-content-end">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="tempOrder.is_paid">
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        <span v-if="tempOrder.is_paid" class="text-success ">已付款</span>
                                        <span v-else>未付款</span>
                                    </label>
                                </div>

                            </div>
                            <div class="col-4 ">
                                <h3 class="fs-4 fw-bold mb-4">選購商品</h3>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>商品</th>
                                            <th>數量</th>
                                            <th>金額</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in tempOrder.products" :key="item.id">
                                            <td>{{ item.product.title }}</td>
                                            <td>{{ item.qty }} / {{ item.product.unit }}</td>
                                            <td>{{ toCurrency(item.total) }}</td>
                                        </tr>                                        
                                    </tbody>
                                </table>                               
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updateOrder(tempOrder)">修改付款狀態</button>
                    </div>
                </div>
            </div>         
        </div>

        <!--刪除訂單modal -->
        <div class="modal fade" id="delOrderModal" tabindex="-1" aria-labelledby="delOrderModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-danger">
                        <h2 class="modal-title fs-4 text-white" id="exampleModalLabel">刪除訂單</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-if="tempOrder.user">
                        是否刪除<strong class="text-danger">{{ tempOrder.user.name }}</strong> 訂單(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="delOrder">確認刪除</button>
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

let orderModal = "";  
let delOrderModal = ""; 

export default {
    data() {
        return {
            orders: [],
            pages: {},
            tempOrder: {},
            currentPage: 1,
        }
    },
    methods: {
        getOrders(page = 1) {
            this.currentPage = page
            this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders/?page=${page}`)  
                .then((res) => {                        
                    this.orders = res.data.orders;     
                    this.pages =  res.data.pagination; 
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        turnDate(time) {
            const date = new Date(time * 1000); 
            const year = date.getFullYear(); 
            const month = date.getMonth() + 1; 
            const day = date.getDate(); 
            const formattedDate = `${year}/${month}/${day}`; 
            return formattedDate
        },
        toCurrency(num){
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');           
        },
        openOrderModal(order) {
            this.tempOrder = { ...order }
            orderModal.show()
        },
        openDelModal(order) {
            this.tempOrder = { ...order }
            delOrderModal.show()
        },
        updateOrder(tempOrder) {
            const paid = {
                is_paid: tempOrder.is_paid
            }         
            this.$http.put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${tempOrder.id}`, {data: paid})  
                .then((res) => {
                    alert(res.data.message)   
                    orderModal.hide()  
                    this.getOrders(this.currentPage)                    
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        delOrder() {
            this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`)  
                .then((res) => {
                    alert(res.data.message)   
                    delOrderModal.hide()  
                    this.getOrders(this.currentPage)                    
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
        orderModal = new Modal(document.getElementById('orderModal'));
        delOrderModal = new Modal(document.getElementById('delOrderModal'));        
        this.getOrders()
    },
}
</script>