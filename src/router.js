import Vue from 'vue'
import Router from 'vue-router'

//1:引入Exam01.vue组件
import Footer from "./components/zl/Footer.vue"
import Home from "./components/zl/Home.vue"
import Title from "./components/zl/Title.vue"
import ArticleList from "./components/zl/common/ArticleList.vue"
import Search from "./components/zl/Search.vue"
import Me from "./components/zl/Me.vue"
import Write from "./components/zl/Write.vue"
import Set from "./components/zl/Set.vue"
import Share from "./components/zl/Share.vue"
import Publish from "./components/zl/Publish.vue"
import Index from "./components/zl/Index.vue"
import MessageList from "./components/zl/MessageList.vue"
import FirendList from "./components/zl/FirendList.vue"
import Details from "./components/zl/common/Details.vue" 
import homepage from "./components/zl/common/homepage.vue" 

import MessageList1 from "./components/zl/common/MessageList1.vue" 
import Login from "./components/zl/common/Login"
import Test from "./components/zl/common/Test"
import Recomment from "./components/zl/common/Recomment"
import Register from "./components/zl/common/Register"
// import Private from "./components/zl/Private.vue"
//临时指定消息列表组件路径

//2:为组件配置访问路径
Vue.use(Router)
export default new Router({
  routes: [
 {path:"/Publish",component:Publish},
 {path:"/Search",component:Search},
 {path:"/ArticleList",component:ArticleList},
 {path:'/Home',component:Home},
 {path:'/Footer',component:Footer},
 {path:'/Title',component:Title},
 {path:'/Me',component:Me},
 {path:'/Share',component:Share},
 {path:'/Set',component:Set},
 {path:'/Write',component:Write},
 {path:'/Index',component:Index},
 //{path:'/Private',component:Private},
 {path:'/MessageList',component:MessageList},
 {path:'/FirendList',component:FirendList},
 {path:'/Details',component:Details},
 {path:'/homepage',component:homepage},
 {path:'/MessageList1',component:MessageList1},
 {path:'/Register',component:Register},
{path:'/Recomment',component:Recomment},
{path:'/Login',component:Login},
{path:'/Test',component:Test},
  ]
})
