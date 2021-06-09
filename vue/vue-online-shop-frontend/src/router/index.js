import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/pages/admin/Index'
import Edit from '@/pages/admin/Edit'
import Products from '@/pages/admin/Products'
import New from '@/pages/admin/New'
const Cart = () => import('@/components/Cart.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
