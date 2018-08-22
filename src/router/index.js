import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import home from '@/pages/home/Home'
import home1 from '@/pages/home/home1'
import homehome from '@/pages/home/homehome'
import product from '@/pages/product/Product'
import customerList from '@/pages/customer/CustomerList'
import customerArea from '@/pages/customer/CustomerArea'
import sales from '@/pages/sales/Sales'
import contact from '@/pages/contact/Contact'
import suggest from '@/pages/suggest/Suggest'
import ProductInfo from '@/pages/product/ProductInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path: '/home',
          component:homehome,    
        },
        {
          path: '/home1',
          component:home1,    
        },
        {
          path: '/product',
          component:product,    
        },
        {
          path: '/productInfo',
          component:ProductInfo,    
        },
        {
          path: '/customerList',
          component:customerList,    
        },
        {
          path: '/customerArea',
          component:customerArea,    
        },
        {
          path: '/sales',
          component:sales,    
        },
        {
          path: '/contact',
          component:contact,    
        },
        {
          path: '/suggest',
          component:suggest,    
        }
      ]
    }
  ]
})
