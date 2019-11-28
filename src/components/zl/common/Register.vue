<template>
    <div class="app-login">
        <div><p>在"我说"</p></div>
        <div><h3>分享美好生活</h3></div>
        <div><img src="../../../assets/img/20191114113756.jpg" ></div>
        <div class="app-input"><input type="text" placeholder="用户名" v-model="uname"></div>
        <div><input type="text" placeholder="手机号" v-model="tel"></div>
        <div><input type="password" placeholder="设置6~12位密码" v-model="upwd"></div>
        <div><button @click="reg">立即注册</button></div>
        
     
    </div>
</template>
<script>
export default {
             data(){
                 return{
                     uname:"",
                     tel:"",
                     upwd:"",
                    
                 }
             },
             methods:{
                   reg(){
                     //创建正则表达式验证  
                     var preg=/^[1][3-8][0-9]{9}$/;
                     var reg=/^[a-z0-9]{6,12}$/i;
                     //获取用户名 手机号  密码  
                      var u=this.uname;
                     var t=this.tel;
                     var p=this.upwd;
                     
                   console.log(u+"_"+p+"_"+t);
                    //验证用户名  
                    if(!reg.test(u)){
                        this.$messagebox("消息","用户名格式不正确");
                        return;
                    }
                    
                   //验证密码
                    if(!reg.test(p)){
                       this.$messagebox("消息","密码格式不正确");
                        return;
                    }
                    //验证手机号
                    if(!preg.test(t)){
                        this.$messagebox("消息","手机格式不正确");
                        return;
                    }
                    //发送axios发送注册请求
                   var url="user/reg";
                   var obj={uname:u,upwd:p,tel:t};
                     this.axios.get(url,{params:obj})
                        .then(res=>{
                        if(res.data.code==1){
                            this.$toast(`${res.data.msg}`);                
                            this.$router.push("/recomment");
                        }else{
                            this.$toast(`登录失败: ${res.data.msg}`);
                        }
                        })
                   }
             }

}
</script>
<style scoped>
img{
    width:35%;
    border-radius: 50%;
}

h3{
    /* margin-bottom:20%; */
}
.app-login{
  padding-top: 0px;
    padding-bottom: 0px;
    overflow-x: hidden;
    width: 100%;
    height: 846px;
    background-image:linear-gradient(to  top right, #fa866e ,#FFE7BA) !important;
    text-align: center;}
.app-input{
    margin-top: 8%;
}
input{
    outline:none;
    text-align: center;
    border-radius: 8px;
    border:none;
    width:50%;
    padding:2%;
    margin-bottom:4%;
}
button{
    width:55%;
    padding: 2%;
    border-radius: 8px;
    background-image:linear-gradient(to  top right, #fa866e ,#FFE7BA);
    outline: none;
    border:none;
}

</style>

