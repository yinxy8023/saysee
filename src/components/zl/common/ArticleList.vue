<template>
  <div class="product_app">
    <!--添加一个商品 start-->
     <div class="goods-item" v-for="(item,i) of lists" :key="i" @click="details" :id="item.po_id"> 
     <!--商品图片-->
     <img :src="`http://127.0.0.1:3000/${item.po_url}`"  /> 
     <!-- <img :src="item.pic" alt=""> -->
     <!-- <img :src="require('../../../assets/clothes.jpg')" alt=""> -->
     <!--商品名称-->
     <!-- <h4>{{item.lname}}</h4> -->
      <h3>{{item.po_title}}</h3>
     <!--商品价格-->
     <!-- <h5 class="price">{{item.price}}</h5> -->
     <!--加入购物车按钮-->
     <!-- <mt-button @click="addcart" :data-lid="item.lid" :data-lname="item.lname" :data-price="item.price">
       加入购物车
     </mt-button> -->
     <div class="user"> 
        <div class="userr"> 
          <img class="userimg" :src="`http://127.0.0.1:3000/${item.po_photo}`" alt="">  
        <!-- <img class="userimg" :src="require('../../../assets/photo.jpg')" alt=""> -->
        </div> 
        <span class="name">{{item.po_name}}</span>  
      </div> 
     </div> 
    <!--添加一个商品  end -->
    <!--查看购物车按钮-->
    <!-- <mt-button @click="jumpCart">查看购物车</mt-button> -->
    <!--加载更多  按钮-->
     <div class="jz"> 
      <mt-spinner :size=25 @click="loadMore" type="fading-circle" color="#d0d0d0">加载更多</mt-spinner>  
     </div> 
    <!-- <ul
    v-infinite-scroll="load"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
      <li v-for="item in lists">{{ item }}</li>
    </ul> -->

  </div>
</template>
<script>
// import articlejson from "../../../json/article.json"
import Details from "./Details.vue"
//功能一：当组件创建成功获取第一页数据
export default {
  created(){
    this.loadMore();
  },
  data(){
    return{
       lists:[],
       pno:0,
    }
  }, 
  methods:{
    details(){
      
      this.$router.push("/Details");
    },
  //   load() {
  //     this.loading = true;
  //     setTimeout(() => {
  //     let last = this.lists[this.lists.length - 1];
  //     for (let i = 0; i <= 2; i++) {
  //       this.lists.push(last + i);
  //     }
  //     this.loading = false;
  //   }, 3000);
  // },
    //loadMore(){
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
  //    this.loading = true;
  //    setTimeout(() => {
  //    let last = this.list.data[this.list.data.length - 1];
  //    for (let i = 1; i <= 10; i++) {
  //      this.list.data.push(last + i);
  //   }
  //     this.loading = false;
  //   }, 2500);
  //无限加载函数
    loadMore(){
      //功能：获取服务器商品列表
      //1.创建变量url保存请求路径
      var url="/cart/article"
      //2.自增页码
      this.pno++;
      //3.创建参数对象
      var obj={pno:this.pno}
      //4.发送ajax请求
      this.axios.get(url,{params:obj}).then(res=>{
        //console.log(res);
        //保存服务器返回数据
        //将赋值改成拼接
        //this.list=res.data.rows;
        for(var i = 0 ;i < res.data.data.length;i++){
         // console.log(res.data.data);
        
         
        console.log(this.lists)
        }
        this.lists=this.lists.concat(res.data.data);
      })
      .catch(err=>{
        console.log(err);
      })
      //5.获取服务器返回结果并且保存list中
    }
  },

    //   if(this.allLoaded){
    //     this.moreLoading = true;
    //     return;
    //   }
    //   if(this.queryLoading){
    //     return;
    //   }
    //   this.moreLoading = !this.queryLoading;
    //   this.pageNum++;
    //   this.$http.post("请求后台数据的接口",Object.assign({pageNum:this.pageNum},this.params)).then((res) => {
    //     if(res.sData && res.sData.list){
    //       this.list = this.list.concat(res.sData.list);
    //       this.allLoaded = this.debtList.length==this.totalNum;
    //     }
    //     this.moreLoading = this.allLoaded;
    //   });
}

</script>
<style scoped>
  /*1.最外层父元素，弹性布局*/
  .product_app{
    display:flex; /*弹性布局*/
    flex-wrap:wrap; /*子元素换行*/
    justify-content:space-between;
    padding:6px;
    padding-top:90px;
    padding-bottom: 50px;
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
    font-size: 15px;
  }
  .articleul{
    list-style:none;
  }
  .jz{
    margin:0 auto;
  }
</style>
