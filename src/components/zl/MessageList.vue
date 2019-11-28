<template>
  <div>
    <titleBar msgTitle="消息" :msgImg="require('../../img/xiaoxi.png')" fixed>
    </titleBar>
    <!-- 3.调用子组件 -->
    <div class="itemstyle">
      <msg-content 
      v-for="(item,i) of list.data"
      :key="i"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :imgurl="require('../../assets/message/11.jpg')">
      </msg-content>
    </div>
  </div>
</template>
<script>
//1.1:引入顶部子组件
import TitleBar from "./TitleBar"
//1.2:引入指定的自组件(一条消息)
import Message from './Message'
//1.3:读取json文件
//将json文件内容转化成js对象
import messagejson from "./json/messagelist.json"
//1.4:引入底部子组件

export default {
  data() {
    return {
      list:messagejson//将json保存到data
    }
  },
  //2.注册自组件
  components:{
    "titleBar":TitleBar,
    "msg-content":Message,
  },
  methods: {
    
  },
}
</script>
<style scoped>
  .itemstyle{
    padding-top: 3rem;
  }
  .page-head{
    font-size: 20px !important;
  }
</style>
