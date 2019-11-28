<template>
  <div>
    <!--3:调用子组件-->
    <message
     class="itemstyle"
     v-for="(item,i) of list.data" :key="i"
     :title="item.title"
     :subtitle="item.subtitle"
     :sendtime="item.time"
     :imgurl="require('../../../assets/img.jpg')"
    ></message>
  </div>
</template>
<script>
//1:引入指定子组件(一条消息Message)
import Details from "./Details"
//1.1:读取json文件
//将json文件内转换js对象
import messagejson from "../json/messagelist.json"
export default {
data(){
  return {
    list:messagejson//将json保存data
  }
},  
//2:注册子组件
components:{
  "details":Details
}  
}
</script>

