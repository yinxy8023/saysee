<template>
  <div class="rootstyle">
  <!--左侧图片与标题子标题-->
    <div class="leftimgtxt">
      <img :src="imgurl" class="imgstyle" />
      <div class="righttxt">
        <span class="title">{{title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{//声明接收父元素数据
    imgurl:{default:""},//消息图片
    title:{default:""},//标题
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
    border-bottom:1px solid #e8e7e7 !important;
  }
  /*2.指定消息的图片大小*/
  .imgstyle{
    width:40px;
    height:40px;
    border-radius: 50%;
    margin: 5px;
  }
  /*3.图片与标题外的父元素*/
  .leftimgtxt{
    display:flex;/*子元素水平X*/
    border: #000;
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
    font-size:15px;
    /* margin-bottom: 10px; */
  }
</style>
