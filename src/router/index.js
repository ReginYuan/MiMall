import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Index from '../pages/index.vue';
import Product from '../pages/product.vue';
import Detail from '../pages/detail.vue';
import Cart from '../pages/cart.vue';
import Order from '../pages/order.vue';
import OrderConfirm from '../pages/orderConfirm.vue';
import OrderList from '../pages/orderList.vue';
import OrderPay from '../pages/orderPay.vue';
import Login from '../pages/login.vue';
import Alipay from '@/pages/alipay';
Vue.use(VueRouter);


export default new VueRouter({

    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            redirect: '/index',
            children: [{
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }

            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },

        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: 'orderList',
                    name: 'orderList',
                    component: OrderList,
                },

                {
                    path: 'orderConfirm',
                    name: 'orderConfirm',
                    component: OrderConfirm,
                },
                {
                    path: 'orderPay',
                    name: 'orderPay',
                    component: OrderPay,
                },
                {
                    path: 'aliPay',
                    name: 'aliPay',
                    component: Alipay,
                }
            ]
        }
    ]

})