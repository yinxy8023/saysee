<template>
  <div class="container">
    <!-- 头部-->
    <div id="top">
      <div class="table"></div>
      <div class="left" @click="jumpFooter">
        <img src="../../../assets/back.png" class="back" >
        <img src="../../../assets/img.jpg" class="photo" @click="jumpPage" >
        <div style="folat:left;"><span style="line-height:40px;" @click="jumpPage">大宝i</span></div>
      </div>
      <div class="right">
         <button  
          @click="favor"
          class="my_button" 
          :style="{backgroundColor:bg_color, color: ft_color}"
          @mouseenter="change()" 
          @mouseleave="goback()"> {{content}} </button>
          <!-- 分享 -->
         <a href="JavaScript:;">
            <img src="../../../assets/share.png" class="share">
         </a> 
      </div>
    </div>

    <!-- 轮播图 -->
    <div id="carousels" class="margin-top:30px;">    
      <p>
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../../assets/beauty_1.png" style="width:100%;"></mt-swipe-item>
          <mt-swipe-item><img src="../../../assets/beauty_2.png" style="width:100%;"></mt-swipe-item>
          <mt-swipe-item><img src="../../../assets/beauty_3.png" style="width:100%;"></mt-swipe-item>
          <mt-swipe-item><img src="../../../assets/beauty_4.png" style="width:100%;"></mt-swipe-item>
          <mt-swipe-item><img src="../../../assets/beauty_5.png" style="width:100%;"></mt-swipe-item>
          <mt-swipe-item><img src="../../../assets/beauty_6.png" style="width:100%;"></mt-swipe-item>
        </mt-swipe>
      </p>
    </div>

    <!-- 文字内容 -->
    <div id="content">
      <!-- 标题 -->
      <h6 style="text-align:center;">
        必败家居清洁好物清单💧无限回购爱用
      </h6>
      <!-- 正文 -->
        <p class="biji"> 
              🔔噔噔噔！明天22日1⃣️0⃣️点小红书商城红5就正式开始啦~所长今天给大家准备了一份家清好物

                红5必买清单，让你实惠买买买！花更少的钱，用更少的力，轻松解决家居清洁难题，你的家也变得蹭蹭亮✨✨~.
        </p>
        <p class="biji"> 
              1⃣️🌟锦怡重油污清洁剂

              #抽油烟机清洗剂除垢去重油厨房去油渍清洁剂

              如果你是用洗洁精倒在抹布上清洁厨房瓷砖和油烟机的，请赶紧换上这个喷雾，省时省心超方便！

              一喷一擦即可消灭重油污渍，让厨房重新恢复蹭蹭亮~就像新买的一样.2⃣️Finish洗涤粉❤️
        </p>
        <p class="biji">   
              Finish 全球领先洗碗机专用洗涤剂品牌，洗碗粉主要成分为碳酸钠、柠檬酸钠等表活，低泡洗涤，

              通过渗透、皂化、乳化、悬浮等化学作用，可以有效清楚顽固污渍，让你的碗碟蹭亮如新~~..

              ️ Mistolin水垢清洁剂

              #卫浴水龙头除水垢清理剂

              很多人种草的清除水垢好物，玻璃和水龙头保持明亮都靠它，

              大概一周一次，根本就是hotel🏨的标准！
        </p>
        <p class="biji"> 
              红5⃣️  必败家居清洁好物清单💧无限回购爱用✨
        </p>
        <p class="biji"> 
              🔔噔噔噔！明天22日1⃣️0⃣️点小红书商城红5就正式开始啦~所长今天给大家准备了一份家清好物 红5必买清单，

              让你实惠买买买！花更少的钱，用更少的力，轻松解决家居清洁难题，你的家也变得蹭蹭亮✨✨~
        </p>
       
        <p class="biji"> ️🌟锦怡重油污清洁剂</p>
        <p class="biji"> 
              #抽油烟机清洗剂除垢去重油厨房去油渍清洁剂

              如果你是用洗洁精倒在抹布上清洁厨房瓷砖和油烟机的，请赶紧🌟换上这个喷雾，省时省心超方便

              ！一喷一擦即可消灭重油污渍🌟，让厨房重新恢复蹭蹭亮~就像新买的一样.
        </p>
        <p class="biji"> 
              2⃣️Finish洗涤粉❤️

              #碗碟洗碗机用洗涤粉

              Finish 全球领先洗碗机专用洗涤剂品牌，洗碗粉主要成分🌟为碳酸钠、柠檬酸钠等表活，低泡洗涤，

              通过渗透、皂化、乳🌸化、悬浮等化学作用，可以有效清楚顽固污渍，让你的碗碟蹭亮如新~~</p>
      <p class="biji"> 
              ️Mistolin水垢清洁剂
              #卫浴水龙✨头除水垢清理剂

              很多人种草的清除水垢好物，玻璃和水龙头保持明亮都✨靠它，

              大概一周一次，根本就是hotel🏨的标准！</p>
      <p class="biji"> 
              4⃣️Mistolin除霉剂
              #墙体除霉剂 墙面白墙除🌸霉漂白剂
              时间一长，湿润的厕所、墙壁瓷砖台盆缝隙里就会长霉菌，而且显得墙壁很斑驳不好看，
              用了除霉剂，✨难清理的点点霉菌斑不见啦~让墙壁重新恢复亮白~
      </p>
      <p class="biji">
                5⃣️绿伞强力洁厕
                #洁厕灵厕洁剂卫生间去味除垢马桶除臭洗厕所去污免🌸刷洗
                就是一款清洁力很好的马桶清洁剂~，厕所脏了刷一刷，马桶亮晶晶
      </p>
      <p class="biji"> 
              6⃣️🐻日本小林制药厕所除臭花瓣凝胶 @黑色之外outrenoir

              #马桶开花洁厕凝胶清洁剂

              挤出来是小花朵的图案🌸，激发满满少女心❤️，打开包装就是一股花香飘进来，很清新很好闻

              作为香味控的你，连厕所也要香香的~~
      </p>
      <p class="biji"> 
              Ps使用方法：紧贴马桶壁，可以按照自己喜欢的排列造型，挤压出小花，每次冲水时都会散发出清洁的香味，
              可以做到保持厕所的清洁卫生去除异味。一套差不多可以使用1-3个月左右.

              7⃣️THE LAUNDRESS婴儿洗衣精 @方方方十一

              #婴儿洗衣液

              洗衣液中的爱马仕，🔥很多薯宝宝都种草的一款洗衣液，不仅洗得干净，而且洗完衣服后留香是👶婴儿香的感觉，闻起来超好闻~

              另一瓶是THE LAUNDRESS婴儿衣物柔软精，像牛奶🥛一样的液体柔顺剂，洗完衣服很柔软很好闻.

              今天和大家分享了不少薯宝宝会经常回购的爱用清洁好物，错过了双11没关系，趁着红5赶紧下单把~更多全球好物，红5期间等你来PICK！🔥
      </p>   
    </div>

    <!-- 标签 -->
    <div id="lable">
       <mt-badge size="small" color="rgb(228, 227, 227)">#日常美容保健品</mt-badge>
    </div>

    <!-- 发布时间 -->
    <div id="date">
      <span class="fnt14" >10-15</span>
    </div>
    <hr style="width:90%;color:#ccc;">
     <!-- 评论 -->
    <div id="comment">
      <span class="fnt14" style="color:#7F8180;font-size:16px;">共632条评论</span>
      <!-- 写评论 -->
      <div class="write" style="text-align:center;">
        <img src="../../../assets/img.jpg" style="float:left;">
        <input type="text" placeholder="说点什么..." class="say" style="float:right;">
      </div>
    </div>  
    <br>  
    <br>
    <br>
    <br>
    <br>
  <div >
    <!-- 评论列表 -->
    <!--3:调用子组件-->
     <message
      class="itemstyle"
     v-for="(item,i) of list.data" :key="i"
     :title="item.title"
     :subtitle="item.subtitle"
     :sendtime="item.time"
     :imgurl="require('../../../assets/img1.jpeg')"
    ></message>
   </div> 
    <!-- 加载更多 按钮 -->
    <span size="large" @click="loadMore" style="font-size:14px;color:#999;margin-left:40%;">加载更多</span>
    <!--底部 -->
      <div id="footer">
        <div style="float:left;">
          <input class="end"  placeholder="说点什么..."  >
        </div>
        <div class="icon">
        <img src="../../../assets/zan.png" >
        <span style="font-size:14px;">2.3万</span>
        <img src="../../../assets/collect_1.png" >
        <span style="font-size:14px;">2.3万</span>
        <img src="../../../assets/pinglun.png" >
        <span style="font-size:14px;">2.3万</span>
        </div>
      </div>
  </div>
</template>
<script>
    import Message from "./Message"
    //1.1:读取json文件
    //将json文件内转换js对象
    import messagejson1 from "../json/messagelist1.json"
    export default {
    data(){
      return {
        list:messagejson1,//将json保存data
        liked:false,
        content:'关注',
        bg_color:"#fff",
        ft_color:"#999", 
      }
    },  
    //2:注册子组件
    components:{
      "message":Message
    },
    
    methods:{
        jumpFooter(){
              this.$router.push("/Index");
        },
      favor (e) {
        this.liked=!this.liked;
        if(this.liked){
            this.content="已关注";
            this.bg_color="#fff";
            this.ft_color="#999";
          } else{
            this.content="关注"
            this.bg_color="#fff";
            this.ft_color="#f56c6c";
            }
        },
        change(){
          this.bg_color="#fff";
          this.ft_color="#999";
    
        },
        goback(){
          // if(this.liked){
          // this.bg_color="#fff";
          // this.ft_color="#999";
          // }
          // else{
            this.bg_color="#fff";
            this.ft_color="#999";

              // }
        },
         loadMore(){
      // 功能:获取服务器商品列表
      // 1.创建变量url保存请求路径
      var url="product";
      // 2.自增页码
      this.pno++;
      // 3.创建参数对象
        var obj ={pno:this.pno};
      // 4.发生ajax请求
      this.axios.get(url,{params:obj}).then(res=>{
        // 成功回调
        // 保存服务器返回数据
        // this.list=res.data.rows;
        // 将赋值改拼接
        this.list=this.list.concat(res.data.rows);
      }).catch(
        err=>{
          // 失败回调
          console.log(err)
        })
      // 5.获取服务器返回结果并且保存list中
    }
      }
  }
</script>
<style scoped>
 body{
     font-size:14px;
    
     color:#999;
     }
 button{
    outline:none;
    margin-top:-15px;
  }
 .my_button{
    color: #f56c6c;
    background: #fff;
    border: #fbc4c4 solid;
    border-radius: 20px;
    padding: 2px 5px;
    text-align: center;
    -webkit-transform-: scale(0.7);
  }
/* 头部 */
  #top{
    height: 60px;
		width:100%;
		background:#fff;
		position:fixed;
		top:0;left:0;
    z-index: 9999;
    box-shadow:0 3px #fafafa;
	}
  #top .left{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  #top .left img{
    float: left;
  }
   #top .left .back{
   width:20px;
   height:20px;
   margin-top:13px;
   padding-left:5px;
  }
  #top .left .photo{
    width:40px;
    height:40px;
    margin-top:3px;
    margin-left:5px;
  }
  #top .left span{
    margin-top:25px;
    padding:10px;
    width:20px;
    height:20px;
    font-size: 18px;
    line-height: 20px;
  }
  #top .right{
    float:right;
    text-align: center;
    margin-top:10px;
  
    padding:10px;

  }
  #top .right .share{
    width:20px;
    height:20px;
    float:right;
  }
  #top .right a:hover{ 
   background-color:yellow;
  } 
  .carousels{
    margin-top: 30px;
   }
  .carousels p img {
    width: 200px;
    text-align: center;
  }
  .mint-swipe {
     height: 300px;
  }
   h6{
     margin:0;
   }
  .content {
   margin:0 20px;
   text-align: center;
  }
  #lable {
   margin-left:5%;
   padding: 5px;
   box-sizing: border-box;
   font-size: 20px;
  }  
  .fnt14{
   font-size:14px;
    color:#999;
    margin-left:5%;
  }
  .biji{
    width:86%;
    font-size: 14px;
    font-family:'PingFang SC';
    color:#5a5a5a;
    margin-left:8%;  
    letter-spacing: 3px;
  }
  .write img{
   width:40px;
   height:40px;
   margin-left:5%;
   margin-top:10px;
   padding: 0;
   float: left;
  }
  .write input{
   width:70%;
   float: left;
   border:1px solid #F6F6F4;
   border-radius:15px;
   padding:5px;
   margin-top:15px;
   margin-left: 15px;
   color:#dadada;
   background:#F6F6F4;
   font-size:14px;
  }
  .itemstyle{
    margin-left: 3%;
  }
   #footer{
    width:100%;
    height: 40px;
    background: #fff;
		position:fixed;
		bottom:0;
    left:0;
	}
  #footer .end{
  width:150px;
  height:20px;
  border:1px solid  #ccc;
  border-radius:30px;
  margin:0 auto;
  margin-left:5px;
  font-size:12px;
  }
  #footer .icon img{
    width:20px;height:20px;
    margin-left: 10px;
    margin-top:10px;
  }
  #footer .icon span{
    margin-left: 9px;
    margin-top:10px;
  }

</style>
   
