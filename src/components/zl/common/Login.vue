<template>
    <div class="app-login">
       
        <p>分享美好生活</p>
          <div><img src="../../../assets/img/20191114113756.jpg" ></div>
            <!--用户名输入框-->
         <div class="inputUp">
             <div class="img-put"><img class="img1" src="../../../assets/img/load.jpg" ></div>
            <input class="inputName" type="text" placeholder="用户名" v-model="uname ">
        </div>
           <!--密码输入框-->
       <div class="inputDown">
            <div class="img-put"><img class="img1" src="../../../assets/img/2853886.jpg" ></div>
          <input class="inputUpwd" type="text" placeholder="密码" v-model="upwd ">
       </div>
        <div class="app-rg">
           <div class="re-input"><input type="radio">忘记密码</div>
           <div class="re-router"><router-link to ="/Register"><span>立即注册</span></router-link></div>
       </div>
     <div class="hr"><hr></div>
       <div class="btn">
         <button class="btn" size="large" @click="login">登录</button>
       </div>
</div>
        
</template>
<script>
export default {
    //1.保存二个数据 uname upwd
    data(){
        return{
             uname:"",
             upwd:"",
            
        }
    },
    //2:添加函数login 完成登录
    methods: {
        login(){ 
            //1:创建正则表达式 3~12
            var reg=/^[a-z0-9]{3,12}$/i;
            //获取用户输入 用户名/密码
            var u=this.uname;
            var p=this.upwd;
            //4: 验证用户名如果不匹配  提示框
            //验证密码如果不匹配   提示框
            if(!reg.test(u)){
                this.$messagebox("消息","用户名格式不正确");
                return;
                
            }
            if(!reg.test(p)){
             this.$messagebox("消息","用户密码不正确");
             return;
            }
         //5:发送ajax请求完成登录验证
          var url="user/login";
          var obj={uname:u,upwd:p};
          this.axios.get(url,{params:obj})
          .then(res=>{//成功回调
              if(res.data.code==1){
                  //console.log(res.data.data[0].user_id,res.data.data[0].user_name);
                //1:跳转 /product 商品列表
                this.$store.commit("setUid",res.data.data[0].user_id);
                this.$store.commit("setUname",res.data.data[0].user_name);
                this.$router.push("/Recomment");
                
              }else{
                  this.$toast("用户名或密码有误")
              }
          })
          .catch(err=>{//失败回调
              console.log(err)
          })
         //登录成功 跳转商品列表
         //登录失败 提示框
        }
    },
}
</script>
<style scoped>
.re-router{
      margin-right: 21%;
}
.re-input{
    margin-left: 21%;
}
 .app-rg{
    display: flex;
     justify-content:space-between;
 }
.hr{
    margin-top: 7%;
}
hr{
    border:0.5px solid #fff;
}
.app-login{
    padding-top: 0px;
    padding-bottom: 0px;
    overflow-x: hidden;
    width: 100%;
    height: 846px;
     background-image:linear-gradient(to  top right, #fa866e ,#FFE7BA) !important;
    text-align: center;
}
p{
    text-align: center;
     margin-top:16%;
}
.inputUp{
      margin-top:10%;
      margin-bottom:4%; 
      border-radius:8px;
       outline:none;

    
    }
.inputName{
    border-radius:5px;
    width:58%;
    height: 30px;
    padding-left:5px;
    
    border:none;
    text-align: center;
    
}
.inputDown{
    margin-bottom:4%;
   
}
.inputUpwd{
     border-radius:5px;
     width:58%;
     height: 30px;
     padding-left:5px;
     border:none;
    text-align: center;
    
}
.btn{
    margin-top: 3%;
}
button{
 width: 59%;
    height: 49px;
    border-radius: 24px;
    border: none;
}
img{
    width:30%;
    border-radius: 50%;
}
.img-put{
 position: absolute;
 margin-left:-10%;
 margin-top:1%;
  }

.img1{
width:10%;
}
</style>
