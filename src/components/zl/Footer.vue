<template>
  <div>
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
import TabBarIcon from "./common/TabBarIcon.vue"
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
    "tabbaricon":TabBarIcon,
   
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