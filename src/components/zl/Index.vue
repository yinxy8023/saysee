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
         <me></me>
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
import Me from "./Me.vue"
import Home from "./Home.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import Publish from "./Publish.vue"
import MessageList from "./MessageList.vue"
export default {
  data(){
    return{
      active:"message",
     currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods:{
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
  // created:{
  //   changeState(n){
  //     for(var i=0;i<this.currentIndex.length;i++){
  //       if(n==i){
  //         this.currentIndex[i].isSelect=true;
  //       }else{
  //         this.currentIndex[i].isSelect=false;
  //       }
  //     }
  //   }
  // },
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
</style>
