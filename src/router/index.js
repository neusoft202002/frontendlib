import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Main from "../views/Main";
import User from "../views/User";
import UserInfo from "../components/user/UserInfo";
import UserEdit from "../components/user/UserEdit";
import UserAddress from "../components/user/UserAddress";
import UserAdd from "../components/user/UserAdd";
import Product from "../views/Product";
import ProductInfo from "../components/product/ProductInfo";
import ProductEdit from "../components/product/ProductEdit";
import ProductStocks from "../components/product/ProductStocks";
import ProductAdd from "../components/product/ProductAdd";
import Cart from "../views/Cart";
import Order from "../views/Order";
import Delivery from "../views/Delivery";
import Warning from "../views/Warning";
import CartAll from "../components/cart/CartAll";
import CartAlone from "../components/cart/CartAlone";
import Mine from "../views/Mine";
import OrderInvalid from "../components/order/OrderInvalid";
import OrderPay from "../components/order/OrderPay";
import OrderPayed from "../components/order/OrderPayed";
import Delivering from "../components/delivery/Delivering";
import DeliveryConfirm from "../components/delivery/DeliveryConfirm";
import DeliveryFinish from "../components/delivery/DeliveryFinish";
import UserWarning from "../components/warning/UserWarning";
import OrderWarning from "../components/warning/OrderWarning";
import StocksWarning from "../components/warning/StocksWarning";
import MyCart from "../components/mine/MyCart";
import MyOrder from "../components/mine/MyOrder";
import MyDelivery from "../components/mine/MyDelivery";
import AddressEdit from "../components/user/AddressEdit";
import AddressAdd from "../components/user/AddressAdd";
import CartAdd from "../components/cart/CartAdd";
import OrderAll from "../components/order/OrderAll";
import OrderDetail from "../components/order/OrderDetail";
import OrderAdd from "../components/order/OrderAdd";
import DeliveryAll from "@/components/delivery/DeliveryAll";
import DeliveryAdd from "@/components/delivery/DeliveryAdd";
import AddWarning from "@/components/warning/AddWarning";
import MyCartAdd from "@/components/mine/MyCartAdd";
import MyOrderInfo from "@/components/mine/MyOrderInfo";
import Img from "@/views/Img";

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
    component: Main,
    children: [
      {
        path:'',
        name: 'DefaultMain',
        redirect: 'user'
      },
      {
        path:'user',
        component: User,
        children: [
          {
            path:'',
            name: 'DefaultUser',
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
          {
            path: 'addressEdit',
            name: 'AddressEdit',
            component: AddressEdit
          },

          {
            path: 'addressAdd',
            name: 'AddressAdd',
            component: AddressAdd
          }
        ]
      },
      {
        path: 'product',
        component: Product,
        children: [
          {
            path:'',
            name: 'DefaultProduct',
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
            component: ProductEdit
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
      },
      {
        path: 'cart',
        component: Cart,
        children: [
          {
            path: '',
            name: 'DefaultCart',
            redirect: 'cartAll',
          },
          {
            path: 'cartAll',
            name: 'CartAll',
            component: CartAll,
          },
          {
            path: 'cartAlone',
            name: 'CartAlone',
            component: CartAlone
          }
          ,
          {
            path: 'cartAdd',
            name: 'CartAdd',
            component: CartAdd
          }
        ]
      },
      {
        path: 'order',
        component: Order,
        children: [
          {
            path: '',
            name: 'DefaultOrder',
            redirect: 'orderAll'
          },
          {
            path: 'orderAll',
            name: 'OrderAll',
            component: OrderAll
          },
          {
            path: 'orderInvalid',
            name: 'OrderInvalid',
            component: OrderInvalid
          },
          {
            path: 'orderPay',
            name: 'OrderPay',
            component: OrderPay
          },
          {
            path: 'orderPayed',
            name: 'OrderPayed',
            component: OrderPayed
          },
          {
            path: 'orderDetail',
            name: 'OrderDetail',
            component: OrderDetail
          },
          {
            path: 'orderAdd',
            name: 'OrderAdd',
            component: OrderAdd
          }
        ]
      },
      {
        path: 'delivery',
        component: Delivery,
        children: [
          {
            path: '',
            name: 'DefaultDelivery',
            redirect: 'deliveryAll'
          },
          {
            path: 'deliveryAll',
            name: 'DeliveryAll',
            component: DeliveryAll
          },
          {
            path: 'delivering',
            name: 'Delivering',
            component: Delivering
          },
          {
            path: 'deliveryConfirm',
            name: 'DeliveryConfirm',
            component: DeliveryConfirm
          },
          {
            path: 'deliveryFinish',
            name: 'DeliveryFinish',
            component: DeliveryFinish
          },
          {
            path: 'deliveryAdd',
            name: 'DeliveryAdd',
            component: DeliveryAdd
          }
        ]
      },
      {
        path: 'warning',
        component: Warning,
        children: [
          {
            path: '',
            name: 'DefaultWarning',
            redirect: 'userWarning'
          },
          {
            path: 'userWarning',
            name: 'UserWarning',
            component: UserWarning
          },
          {
            path: 'orderWarning',
            name: 'OrderWarning',
            component: OrderWarning
          },
          {
            path: 'stocksWarning',
            name: 'StocksWarning',
            component: StocksWarning
          },
          {
            path: 'addWarning',
            name: 'AddWarning',
            component: AddWarning
          }
        ]
      },
      {
        path: 'mine',
        component: Mine,
        children: [
          {
            path: '',
            name: 'DefaultMine',
            redirect: 'myCart'
          },
          {
            path: 'myCart',
            name: 'MyCart',
            component: MyCart
          },
          {
            path: 'myOrder',
            name: 'MyOrder',
            component: MyOrder
          },
          {
            path: 'myDelivery',
            name: 'MyDelivery',
            component: MyDelivery
          },
          {
            path: 'myCartAdd',
            name: 'MyCartAdd',
            component: MyCartAdd
          },
          {
            path: 'myOrderInfo',
            name: 'MyOrderInfo',
            component: MyOrderInfo
          }
        ]
      },
      {
        path: 'img',
        name: 'Img',
        component: Img
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
