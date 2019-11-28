<template>
  <div class="bg">
    <div class="head">
        <p class="title">编辑资料</p> 
          <!-- <a href="javascript:history.go(-1)"> -->
          <img src="../../assets/zuojiantou.png" class="img1" alt="" @click="zuojiantou">
          <!-- </a>    -->
    </div>
    <div class="field">
      <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="小红书号" placeholder="请输入小红书号" type="url"></mt-field>
      <mt-field label="性别" placeholder="请输入性别" type="number"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
      <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="小红书号" placeholder="请输入小红书号" type="url" v-model="website"></mt-field>
      <mt-field label="性别" placeholder="请输入性别" type="number" v-model="number"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>  -->
    </div>
  </div>
</template>

<script>
import Me from './Me'
 import Vue from 'vue'
 import { Field } from 'mint-ui'

export default {
  data () {
    return {
      
    }
  },
  components:{

  },
  methods:{
     zuojiantou(){
       this.$router.push('/Me')
     }
  }
}
</script>
<style scoped>
  .mint-cell-text {
      font-size: 14px !important;
  }
  .bg{
    background: #fafafa
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
  .mint-cell-wrapper{
    font-size: 14px;
  }
</style>
