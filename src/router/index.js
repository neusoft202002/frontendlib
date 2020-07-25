import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Main from "@/views/Main"
import UserInfo from "@/components/User/UserInfo";
import User from "@/views/User";
import Product from "@/views/Product";
import UserEdit from "@/components/User/UserEdit";
import UserAddress from "@/components/User/UserAddress";
import UserAdd from "@/components/User/UserAdd";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductStocks from "@/components/Product/ProductStocks";
import ProductAdd from "@/components/Product/ProductAdd";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: "/login"
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path:'',
        name: 'DefaultUser',
        redirect: 'user'
      },
      {
        path:'user',
        name: 'User',
        component: User,
        children: [
          {
            path:'',
            name: 'UserInfo',
            redirect: 'userInfo'
          },
          {
            path:'userInfo',
            name: 'UserInfo',
            component: UserInfo,
          },
          {
            path: 'userEdit',
            name: 'UserEdit',
            component: UserEdit
          },
          {
            path: 'userAddress',
            name: 'UserAddress',
            component: UserAddress
          },
          {
            path: 'userAdd',
            name: 'UserAdd',
            component: UserAdd
          },
        ]
      },
      {
        path: 'product',
        name: 'Product',
        component: Product,
        children: [
          {
            path:'',
            name: 'ProductInfo',
            redirect: 'productInfo'
          },
          {
            path:'productInfo',
            name: 'ProductInfo',
            component: ProductInfo,
          },
          {
            path: 'productEdit',
            name: 'ProductEdit',
            component: UserEdit
          },
          {
            path: 'productStocks',
            name: 'ProductStocks',
            component: ProductStocks
          },
          {
            path: 'productAdd',
            name: 'ProductAdd',
            component: ProductAdd
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
