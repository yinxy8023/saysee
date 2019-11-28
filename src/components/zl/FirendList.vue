<template>
  <div>
    <mt-header title="好友列表" fixed>
       <a href="javascript:history.go(-1)" slot="left">取消</a> 
      <!-- <mt-button @click="quxiao">取消</mt-button> -->
    </mt-header>
    <div class="itemstyle">
      <fl-item
      v-for="(item,i) of list.data"
      :key="i"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :imgurl="require('../../assets/message/11.jpg')">
      </fl-item>
    </div>
  </div>
</template>
<script>
//引入到header   mint-ui
import { Header } from 'mint-ui'
//引入到搜索框   mint-ui
import { Search } from 'mint-ui'
//1.5:引入好友列表
import FirendListItem from './FirendListItem'
//将json文件内容转化成js对象
import messagejson from "./json/firendlist.json"
export default {
  data() {
    return {
      list:messagejson//将json保存到data
    }
  },
  //2.注册自组件
  components:{
    "fl-item":FirendListItem,
  },
  methods: {
    myadd(){
      console.log("添加");
    },
    quxiao(){
      this.$router.push('/MessageList')
    }
  },
}
</script>
<style scoped>
  .mint-header{
    background-color: #fa866e !important;
    font-size: 15px !important;
    height: 38px !important;
  }
  .itemstyle{
    padding-top: 40px;
  }
</style>