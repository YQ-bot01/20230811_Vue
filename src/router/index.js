import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodList from '../views/GoodList'
import GoodAdd from '../views/GoodAdd'
import GoodUpdate from '../views/GoodUpdate'

import Index from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"商品",
    component:Index,
    show:true,
    redirect:"/GoodList",
    children:[
      {
        path:'/GoodList',
        name:"查询",
        component:GoodList
      },
      {
        path:'/goodAdd',
        name:"添加",
        component:GoodAdd
      }
    ]
  },
  {
    path:'/goodUpdate',
    name:"修改",
    component:GoodUpdate,
    show:false
  },


]

const router = new VueRouter({
  routes
})

export default router
