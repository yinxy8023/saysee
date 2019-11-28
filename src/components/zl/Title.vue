<template> 
<div>
  <div class="titlediv" >
      <mt-navbar v-model="selected" fixed>
        <mt-tab-item id="1">关注</mt-tab-item>
        <mt-tab-item id="2">发现</mt-tab-item>
      </mt-navbar>
    <div class="search">
    <input type="text" placeholder="大家都在搜" class="kuang" maxlength="20">
    </div>
  </div>  


<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" /> -->
    <bodyBar></bodyBar>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" /> -->
    <faxian></faxian>
  </mt-tab-container-item>
</mt-tab-container>




</div>
</template>
<script>
import ArticleList from "./common/ArticleList.vue"
import ArticleList1 from './common/ArticleList1.vue'
export default {
  data(){
    return{
      selected:'1'
    }
  },
  components:{
    "bodyBar":ArticleList,
    "faxian":ArticleList1
  }
}
</script>
<style scoped>
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #fa866e;
    color:#fa866e;
  }
  /* .mint-tab-item.is-selected{
    border-bottom: 3px solid #fa866e;
  } */
  .mint-navbar{
    color:#999;
    width:30%;
    text-align: center;
    padding-left:35%;
    padding-right:35%;
    position: fixed;
    z-index:999;
  }
  .mint-tab-item-label{
    width:100px;
    font-size:15px;
  }
  .mint-navbar .mint-tab-item{
    padding-bottom:10px;
  }
  .titlediv{
    height:5rem;
    position: fixed;
    z-index:999;
    width:100%;
    background:#fff;
    padding-bottom:8px;
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
    font: 13.3333px Arial;
    border: 0;
    outline: 0;
    background: 0 0;
    font-size: 12px;
    color: #232326;
    background: url("../../assets/search.png") no-repeat 10% center; 
    box-sizing: border-box;
    -webkit-box-flex: 1;
    /* height: auto; */
    margin: 0 auto;
    vertical-align: middle;
    white-space: nowrap;
    width: 80%;
    /* line-height: 30px; */
    vertical-align:middle;
     line-height: 19px; 
    position: absolute;
    bottom:4px;
    vertical-align:middle;
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
    position: fixed;
     padding-left: 35px;
    padding-right: 35px; 
    box-sizing: border-box;
    vertical-align:middle;
    z-index:999;
    padding-bottom:10px;
}
</style>