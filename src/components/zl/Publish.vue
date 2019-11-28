<template>
  <div class="bg">
    <div class="head">
        <p class="title">发布</p> 
        <router-link to='Me'>
          <!-- <img src="../../assets/zuojiantou.png" class="img1" alt=""> -->
        </router-link>  
    </div>
    <div>  
      <mt-field label="我的笔记" placeholder="我的分享..." type="textarea" rows="10">       
      </mt-field>      
    </div>
    <div class="btn1">
    <mt-button size="large" @click="go1">
      <img src="../../assets/dingwe.png" height="20" width="20" slot="icon">所在位置
    </mt-button>
    <mt-button size="large" @click="go1">
      <img src="../../assets/aite.png" height="20" width="20" slot="icon">提醒谁看
    </mt-button>
    <mt-button size="large" @click="go1">
      <img src="../../assets/renshu.png" height="20" width="20" slot="icon">谁可以看
    </mt-button>
    <div class="fb">
    <mt-button size="small" @click="download()">
      <img src="../../assets/fabiao.png" height="20" width="20" slot="icon">发表--
    </mt-button>
    </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
 import Footer from "./Footer.vue"
 import Vue from 'vue'
 import { Field } from 'mint-ui'
 import Write from './Write'
 import Me from './Me'
 import { MessageBox } from 'mint-ui'


export default {
  data () {
    return {
      
    }
  },
  methods: {
    go1() {
      this.$router.push('/Write');//要跳转的界面
    },
    download () {
      MessageBox({
        title: '',
        message: '确定发表?',
        showCancelButton: true
      }).then(action => {
        if (action === 'confirm') {
          console.log(1)
        }
        if (action === 'cancel') {
          console.log(2)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components:{
    "Footer":Footer
  }
}
</script>
<style scoped>
.fb{
    border-radius: 10px;
    padding: 10px 0;
    background:  #fff !important;   
    color: #000;
    font-size: 12px;   
    text-align: center; 
  }
.mint-button::after {
  display: inline-block;
}
.bg{
    background: #fafafa
  }
  .mint-button {
    padding-left: 20px;
    font-size: 14px !important;    
    text-align: left !important;
}
  .mint-button--default {
    color: #000;
    background: url("../../assets/right1.png") no-repeat 95% #fff !important;
    -webkit-box-shadow: 0 0 1px #fff;
    box-shadow: 0 0 1px #999;
    border-radius: 10px;
  }
.btn1{
    padding: 10px 0;
  }
  .head{
    border-radius: 2px;
    padding:1px 0 10px 0;
    background:  #fa866e !important;   
    color: #fff; 
    height: 40px; 
    text-align: center;   
  }
  .img1{
    height: 50%;
    float: left;
    margin-top: -35px;
    margin-left: 10px;
  }
</style>
