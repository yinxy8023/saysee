import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入和配置mint-ui组件库
//1:完整引入mint-ui组件库
import MintUI from "mint-ui"
//2:单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui对象注册Vue实例中
Vue.use(MintUI)
//4:引入字体图标样式文件
import "./font/iconfont.css"
//main.js脚手架
//5.引入第三方axios
import axios from "axios"
import bus from "./bus.js"
//6.配置访问服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//7.保存session信息
//每次访问服务器将session id发送服务器验证使用
axios.defaults.withCredentials=true
//8.将axios注册Vue实例中
Vue.prototype.axios=axios; //因为有些不支持axios用vue.use，就写最原始的这种
Vue.prototype.bus=bus;//兄弟组件间传参

//引入第三方库vuex
//vue_app_00/npm i vuex -S
//9.引入vuex
import Vuex from "vuex"
//10.注册vuex
Vue.use(Vuex)
//11.创建存储对象
var store=new Vuex.Store({
  //1.共享数据
  state:{
    uid:0,  //登录用户id
    uname:'请登录' //登录用户名称
  },
  //2.修改函数
  mutations:{
    //2.1
    setUid(state,uid){ //用户id
      state.uid=uid;
    },
    setUname(state,uname){
      state.uname=uname;
    },
    exit(state){ //退出
      state.uid=0;
      state.uname='请登录';
    }
  },
  //3.获取的函数
  getters:{
    //3.1用户id和用户名
    getUid(state){return state.uid},
    getUname(state){return state.uname}
  }
  //4.异步修改的函数
})
//12.将存储对象添加Vue实例

//以下四行创建Vue实例放main.js最后
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
