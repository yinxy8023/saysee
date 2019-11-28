<template>
  <div class="rootstyle">
  <!--左侧图片与标题子标题-->
    <div class="leftimgtxt">
      <div class="imageCenter">
        <img :src="imgurl" class="imgstyle" />
      </div>
      <div class="righttxt">
        <span class="title">{{title}}</span>
        <span class="subtitle">{{subtitle}}</span>
      </div>
    </div>
    <!--发布时间-->
    <span class="sendtime">{{sendtime}}</span>
  </div>
</template>
<script>
export default {
  props:{//声明接收父元素数据
    imgurl:{default:""},//消息图片
    title:{default:""},//标题
    subtitle:{default:""},//子标题
    sendtime:{default:""},//时间
  }
}
</script>
<style scoped>
  /*1.最外层的根元素*/
  .rootstyle{
    display:flex;/*弹性布局*/
    /*两端对齐 水平居中*/
    justify-content:space-between;
    align-items:center;
  }
  /* 图片外的div */
  /* .imageCenter{
    width: 45px;
    height: 45px;
  } */
  /*2.指定消息的图片大小*/
  .imgstyle{
    width:50px;
    height:50px;
    border-radius: 50%;
    margin: 5px;
  }
  /*3.图片与标题外的父元素*/
  .leftimgtxt{
    display:flex;/*子元素水平X*/
  }
  /*4.标题的父元素 修改子元素的方向*/
  .righttxt{
    display:flex;/*弹性布局*/
    flex-direction:column;/*垂直*/
    justify-content:center;
    margin-left:7px;
  }
  /*5.标题的样式*/
  .title{
    color:#000;
    font-size:17px;
  }
  /*6.子标题样式*/
  .subtitle{
    width: 240px;
    color:gray;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  /*7.发送时间*/
  .sendtime{
    color:gray;
    padding-right: 15px;
  }
</style>
