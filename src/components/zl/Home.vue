<template>
  <div class="page-head">
      <titleBar></titleBar>
      <!-- <div class="search" >
        <input type="text" placeholder="大家都在搜" class="kuang" maxlength="20">
      </div> -->
      <!--Home.vue 入口全局组件-->
      <!--3:切换面板列表-->
     
  </div>
</template>
<script>
import Title from "./Title.vue"
export default {
  data(){
    return{
      
     
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
  components:{
    "titleBar":Title,
    
  }
}
</script>
<style scoped>
  
   /*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
.page-wrap{
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px;
}
.search{
  margin-top:50px; 
  margin-left:20px;
  display: inline-block;
    width: 90%;
    border: none;
    border-radius: 15px;
    border-color:#fa866e;
    height: 30px;
    overflow: hidden;
    background: #f7f7f7;
    font-size: 12px;
    -webkit-box-align: center;
    line-height: 30px;
    position: absolute;
    top: 0;
    left: 0;
     padding-left: 35px;
    padding-right: 35px; 
    box-sizing: border-box;
    vertical-align:middle;
}
.kuang{
   text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    margin: 0em 0em 0em 0em;
    font: 13.3333px Arial;
    border: 0;
    outline: 0;
    background: 0 0;
    font-size: 12px;
    color: #232326;
    background: url("../../assets/search.png") no-repeat; 
    width: 19em;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    height: auto;
    margin: 0 auto;
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;
    /* line-height: 30px; */
    vertical-align:middle;
}
</style>