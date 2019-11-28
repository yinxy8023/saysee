<template>
<div>
   
<mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
         <home></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="contact">
         <publish></publish>
        </mt-tab-container-item>
        <mt-tab-container-item id="find">
         <messagelist></messagelist>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
         <div class="head">
      <router-link to='Set'>
        <img src="../../assets/shezhi.png" class="img1" alt="">
      </router-link>
      <div class="ht">
      <p class="title">{{$store.getters.getUname}}</p > 
      <p class="num">知知号:{{$store.getters.getUid}}</p >
      </div>
      <router-link to='Set'>
        <img src="../../assets/fenxiang.png" class="imgr" alt="">
      </router-link>
    </div> 
    <div class="row">
      <div class="col">
        <img src="../../assets/tou.png" class="img2" alt="">
      </div>
      <div class="col-3">
        <a href="">
          <p>{{gzsl}}</p>
          <p>关注</p>
        </a>
      </div>
      <div class="col-3">
        <a href="">
          <p>{{fssl}}</p>
          <p>粉丝</p>
        </a>
      </div>
      <div class="col-3">
        <a href="">
          <p>{{scsl}}</p>
          <p>收藏</p>
        </a>
      </div>
      <div class="btn">
        <mt-button  @click="addRoutes2" class="inp">编辑资料</mt-button>
      </div>
      <router-link to='Set'>
        <div class="btn2">
          <img src="../../assets/shezhi.png" class="w-50" alt="">
        </div>
      </router-link>
    </div>
    
    <div>
      <a href="" >
         
        <router-link to='Write'><button class="jl">击此处填写个人简历让大家更好地认识你</button></router-link>
      </a>
    </div>
    <div class="btn3">
      <mt-button  @click="addRoutes3" class="inp">分享瞬间</mt-button>
    </div>
<div class="page-navbar">   
    <mt-navbar class="page-part" v-model="selected">  
      <mt-tab-item id="1">笔记</mt-tab-item>  
      <mt-tab-item id="2">收藏</mt-tab-item>  
      <mt-tab-item id="3">赞过</mt-tab-item>  
    </mt-navbar>    
    <mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
        <router-link to="/Footer">笔记</router-link>   
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
        <router-link to="/Footer">收藏</router-link>  
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
        <router-link to="/Footer">赞过</router-link>  
      </mt-tab-container-item>  
    </mt-tab-container>  
  </div> 
        </mt-tab-container-item>
    </mt-tab-container> 
  <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
         <tabbaricon
         :selectedImage="require('../../assets/zl_index_selected.png')"
          :normalImage="require('../../assets/zl_index_normal.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
         首页   
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
         <tabbaricon
         :selectedImage="require('../../assets/zl_fabu_selected.png')"
         :normalImage="require('../../assets/zl_fabu_normal.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
         发布
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
          
          <tabbaricon
          :selectedImage="require('../../assets/zl_news_selected.png')"
          :normalImage="require('../../assets/zl_news_normal.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          消息
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
          :selectedImage="require('../../assets/zl_me_selected.png')"
          :normalImage="require('../../assets/zl_me_normal.png')"
          :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我
        </mt-tab-item>
      </mt-tabbar>
</div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import Write from "./Write.vue"
import Set from "./Set.vue"
import Share from "./Share.vue"
import Footer from "./Footer.vue"
import Me from "./Me.vue"
import Home from "./Home.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import Publish from "./Publish.vue"
import MessageList from "./MessageList.vue"
export default {
  name: 'page-navbar', 
data(){
  return{
    selected: '1' ,
    active:"me",
    gzsl:0,
    fssl:0,
    scsl:0,
    currentIndex:[
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:true}
      ]
  }
},
created(){
  this.load();
},
methods: {
  load(){
    //1::发送ajax请求获取关注数量,粉丝数量和收藏数量
    var url="center/myinfo";
    var obj={uid:1};
    this.axios.get(url,{params:obj})
    .then(res=>{//成功回调
        console.log(res);
        this.gzsl=res.data.gzsl[0].gzsl;//关注数量
        this.fssl=res.data.fssl[0].fssl;//粉丝数量
        this.scsl=res.data.scsl[0].scsl;//收藏数量
        console.log(this.gzsl,this.fssl,this.scsl);
    })
    .catch(err=>{//失败回调
        console.log(err)
    })
  },
  addRoutes2 () {
      this.$router.push('/Write')
    },
    addRoutes3 () {
      this.$router.push('/Share')
    },
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(n){
      for(var i=0;i<this.currentIndex.length;i++){
        if(n==i){
          this.currentIndex[i].isSelect=true;
        }else{
          this.currentIndex[i].isSelect=false;
        }
      }
    }
},
 components:{
    "home":Home,
    "tabbaricon":TabBarIcon,
    "publish":Publish,
    "me":Me,
    "messagelist":MessageList
 }
}
</script>
<style scoped>
.mint-tabbar>.mint-tab-item{
    font-size:6rem;
    color:#999;
  }
  .mint-tabbar>.mint-tab-item.is-selected{
    font-size: 20rem;
    color:#fa866e;
    background-color:transparent;
  }
.ht{margin-right: 37px;}
.img1{
    height: 50%;
    float: left;
    margin-top: 15px;
    margin-left: 15px;
  }
  .imgr{
    height: 70%;
    float: right;
    margin-top: -53px;
    margin-right: 10px;
  }
  .head{
    display: flex; /*弹性布局 */
    position: fixed; /*固定定位 */
    z-index: 999; /*浮上方*/
    width: 100%; /*子元素两端对齐*/
    justify-content: space-between;
    /* 垂直居中 */
    align-items: center;
    background-color: #fff;
    height: 7%;
    color: #000;
    font-size: 12px;
    display: inline-block;
    text-align: center;
    padding-bottom: 2%;
  }
  .name{
    text-align: center;
    font-size: 12px;
  }
  .num{
    text-align: center;
    font-size: 6px;
    color:darkgrey;
  }
  .imgy{
    height: 50%;
    float: right;
    padding-right: 10px;
    padding-top: 15px;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding-top: 40px;
  }
  .img2{
    width: 70%;
    padding-left: 30px;
    margin-top: -15px;
  }
  .col-3 {
    padding: 5px 30px 20px 30px;
    font-size: 12px;
  }
  .col{
    padding: 30px 20px 20px 20px;
  }
  .sl{
    color:#999;
    text-align: center; 
  } 
  a{
    text-decoration: none;
    color: #999
  }
  .btn{
    text-align: center;
    border-radius: 25px;
    border: 1px solid rgb(247, 246, 246);
    font-size: 12px;
    width: 35%;
    margin-left: 160px;
    margin-top: -40px;
    height: 18px;
    border: 0;
  }
  .btn2{
    text-align: center;
    border-radius: 25px;
    border: 1px solid rgb(247, 246, 246);
    width: 6%;
    border: 0;
    margin-left: 335px;
    margin-top: -39px;
    height: 18px;
  }
  .btn3{
    text-align: center;
    border-radius: 25px;
    border: 1px solid rgb(247, 246, 246);
    width: 60%;
    height: 20px;
    margin: 0 auto;
  }
  .mint-button {
    background-color:  #fff !important;
    color: #999;
    padding-top: 2px;
    margin-top: 1PX;
    text-align: center;
    border-radius: 25px !important;
    color:#999 !important;
    font-size: 14px !important;
    border: rgb(247, 246, 246) !important;
    width: 100% !important;
    height: 20px !important;
    margin: 0 auto;
}
  .mint-button::after {
    background-color:  #fff !important;
    color: #999;
    padding-top: 2px;
    margin-top: 1PX;
    text-align: center;
    border-radius: 25px;
    color:#999 !important;
    font-size: 14px !important;
    border: rgb(247, 246, 246);
    width: 100%;
    height: 20px;
    margin: 0 auto;
}
  .inp{
    border: 0;
    background: #fff;
    color: #999;
    padding-top: 2px;
    margin-top: 1PX;
  }
  button, input, optgroup, select, textarea {
      font-family: inherit;
      font-size: 80%;
      line-height: 1.15;
      margin: 0;
  }
  .w-50{width: 50%}
  .jl{
      font-size: 11px;
      color: #999;
      margin-left: 35px;
      margin-top: 0px;  
      background: #fff; 
      border: 0;
      padding-top: 2px;
      margin-top: 1PX;
      padding-bottom: 15px;
  }
  p{text-align: center}
  .click{
      text-align: center;
      font-size: 14px;
  }
  .bj{
      margin-right: 36px;
      padding-left: 20px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #fa866e !important;
    color: #fa866e !important;
}
</style>