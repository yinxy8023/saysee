<template>
  <div class="page-head">
  <!--顶部导航子组件-->
    <!--左侧文字-->
    <span>{{msgTitle}}</span>
    <!--右侧两张图片-->
    <div class="right-head">
      <div class="msg-title">
        <router-link to="/FirendList">
          <img :src="msgImg" style="width:25px; margin-right:15px;" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //声明接收父组件的数据
  props:{
    //左侧标题文字
    msgTitle:{default:""},
    msgImg:{default:""},//图片2
  }
}
</script>
<style scoped>
  /*最外层父元素弹性布局*/
  .page-head{
    display:flex;/*弹性布局*/
    position:fixed;/*固定定位*/
    z-index:999;/*浮上方*/
    width:100%;
    /*子元素两端对齐*/
    justify-content:space-between;
    /*垂直居中*/
    align-items:center;
    background-color:#fa866e;
    height:40px;
    color:#fff;
    font-size:18px;
    /*添加左右内边距*/
    /* padding-left:7px;
    padding-right:7px; */
  }
  .page-head span{
    margin: 0 auto;
  }
  /*右侧两张图片*/
  .right-head{
    display:flex;
  }
  /*调整元素高度*/
  .msg-title{
    display:flex;
    align-items:center;
    height:48px;
  }
</style>