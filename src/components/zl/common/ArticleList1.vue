<template>
  <div class="product_app">
    <!--添加一个商品 start-->
    <div class="goods-item" v-for="(item,i) of list.data" :key="i">
     <!--商品图片-->
     <!-- <img :src="'http://127.0.0.1:3000/'+item.pic" /> -->
     <img :src="require('../../../assets/kouhong.jpg')" alt="">
     <!--商品名称-->
     <!-- <h4>{{item.lname}}</h4> -->
     <h3>{{item.title}}</h3>
     <!--商品价格-->
     <!-- <h5 class="price">{{item.price}}</h5> -->
     <!--加入购物车按钮-->
     <!-- <mt-button @click="addcart" :data-lid="item.lid" :data-lname="item.lname" :data-price="item.price">
       加入购物车
     </mt-button> -->
     <div class="user">
       <div class="userr">
        <img class="userimg" :src="require('../../../assets/photo.jpg')" alt="">
       </div>
       <span class="name">{{item.name}}</span>
     </div>
    </div>
    <!--添加一个商品  end -->
    <!--查看购物车按钮-->
    <!-- <mt-button @click="jumpCart">查看购物车</mt-button> -->
    <!--加载更多  按钮-->
    <mt-button size="large" @click="loadMore">加载更多</mt-button>
    <!-- <ul class="articleul"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="(item,i) of list.data" :key="i"></li>
</ul>  -->
  </div>
</template>
<script>
import articlejson from "../../../json/article.json"
//功能一：当组件创建成功获取第一页数据
export default {
  data(){
    return{
      list:articlejson
    }
  },
  //组件创建成功后立即调用此函数
  created(){
    //1.1调用加载商品列表函数
    this.loadMore()
  },
  // data(){
  //   return{
  //     pno:0, //第几页（页码）
  //     list:[], //查询结果
  //   }
  // },
  methods:{
    // jumpCart(){
    //   //功能：跳转购物车组件
    //   this.$router.push("/Cart");
    // },
    // addcart(event){
    //   //添加购物车功能
    //   //1.获取三个参数
    //   //2.价格，商品名称，商品编号
    //   var price=event.target.dataset.price;
    //   var lname=event.target.dataset.lname;
    //   var lid=event.target.dataset.lid;
    //   console.log(price+":"+lname+":"+lid);
    //   //3.发送ajax请求
    //   var url="addcart"
    //   var obj={lid:lid,price:price,lname:lname};
    //   this.axios.get(url,{params:obj}).then(res=>{
    //     console.log(res);
    //     if(res.data.code==-1){
    //       this.$toast("请登录");
    //       this.$router.push("/Login");
    //     }else{
    //       this.$toast("添加成功");
    //     }
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    //   //4.获取服务器返回数据
    //   //5.提示
    // },
    loadMore(){
       //功能：获取服务器商品列表
      //1.创建变量url保存请求路径
    //    var url="ArticleList"
    //    //2.自增页码
    //    this.pno++;
    //    //3.创建参数对象
    //    var obj={pno:this.pno}
    //    //4.发送ajax请求
    //    this.axios.get(url,{params:obj}).then(res=>{
    //     //console.log(res);
    //     //保存服务器返回数据
    //      //将赋值改成拼接
    //      this.list=res.data.rows;
    //      this.list=this.list.concat(res.data.rows); 
    //   })
    //    .catch(err=>{
    //      console.log(err);
    //    })
    //    //5.获取服务器返回结果并且保存list中
    //  }
    // this.loading = true;
    // setTimeout(() => {
    // let last = this.list.data[this.list.data.length - 1];
    // for (let i = 1; i <= 10; i++) {
    //   this.list.data.push(last + i);
    // }
    //   this.loading = false;
    // }, 2500);
  }
  }
}
</script>
<style scoped>
  /*1.最外层父元素，弹性布局*/
  .product_app{
    display:flex; /*弹性布局*/
    flex-wrap:wrap; /*子元素换行*/
    justify-content:space-between;
    padding:4px;
    padding-top:90px;
  }
  /*2.修饰商品样式*/
  .goods-item{
    width:49%;/*指定商品宽度*/
    border:1px solid #cccccc;
    border-radius:5px;
    margin:2px 0;
    padding:2px;
    box-sizing:border-box; /*重新计算盒子模型*/
    display:flex;
    flex-direction: column;
    min-height: 257px;
  }
  /*3.图片样式*/
  .goods-item img{
    width:100%;
  }
  .userimg{
    height:28px;
    border-radius: 50%;
  }
  .user{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .userr{
    position: relative;
    overflow: hidden;
    width:28px;
    height:28px;
  }
  .name{
    display:inline;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #555;
    overflow: hidden;
    margin-left: 10px;
  }
  .articleul{
    list-style:none;
  }
</style>
