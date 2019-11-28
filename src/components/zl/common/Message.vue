<template>
  <div class="rootstyle">
    <!--h3>Message.vue</h3-->
    <!--左侧图片与标题子标题-->
    <div class="leftimgtxt">
      <img :src="imgurl" class="imgstyle" />
      <div class="righttxt">
        <span class="title">
          {{title}}</span><br>
        <span class="subtitle">
          {{subtitle}}</span>
           <!--发布时间-->
          <span class="sendtime"> {{sendtime}} </span>
      </div>
    </div>
   
    <!-- 点赞 -->
    <div class="zan"> 
    <span @click="add"><img src="../../../assets/zan_1.png" style="width:20px;height:20px;"></span><br>
   <span>{{$store.getters.getAge}}</span>
  </div>
  </div>
</template>
<script>
export default {
  props:{ //声明接收父元素数据
    imgurl:{default:""},//消息图片
    title:{default:""},//标题 
    subtitle:{default:""},//子标题 
    sendtime:{default:""}//时间
  },
  methods:{
    
    add(){
      //增加点赞数量
      this.$store.commit("addAge")
    },
  }

}
</script>
<style scoped>
/* 1：最外层根元素 */
 .rootstyle{ 
   display: flex;  /*弹性布局 */
  /*两端对齐 水平居中*/
   justify-content: space-between; 
  align-items: center;
}
/*2:指定消息图片大小*/
.imgstyle{
  width:50px;
  height:50px;
}
/*3:图片与标题外父元素*/
 .leftimgtxt{
  display: flex;/*子元素水平x*/
} 
/*4:标题父元素 修改子元素方向*/
 .righttxt{
 float: right;   /* 弹性布局 */
  flex-direction: column;/*垂直*/
   justify-content: center;
  margin-left:7px;
} 
/*5:标题样式*/
.title{
  color:#000;
  font-size:16px;
}
/*6:子标题样式*/
.subtitle{
  color:gray;
  font-size:14px;
}
/*7:发送时间*/
.sendtime{
  color:gray;
  font-size:14px;
  
}
.zan{
  font-size: 12px;
  color:#999; 
  margin-right: 2%; 
}
</style>

