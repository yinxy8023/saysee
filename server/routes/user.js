const express=require('express');
const pool=require('../pool.js');
var userRouter=express.Router();
//注册
userRouter.get("/reg",(req,res)=>{
 var uname = req.query.uname;
 var tel = req.query.tel;
 var upwd = req.query.upwd;
 var sex = req.query.sex;
 var pic = req.query.pic;
 var sql = "INSERT INTO zl_user(user_name,user_tel,user_pwd,user_sex,user_pic) VALUES (?,?,?,?,?)";
 pool.query(sql,[uname,tel,upwd,sex,pic],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"注册成功",data:result});
 })
});
//http://127.0.0.1:3000/user/reg?uname=test2&tel=1831111111&upwd=111111
 //登录
userRouter.get("/login",(req,res)=>{
 var uname = req.query.uname;
 var upwd = req.query.upwd;
 var sql = "select user_id,user_name,user_tel,user_sex,user_pic from zl_user where user_name=? and user_pwd=?";
 pool.query(sql,[uname,upwd],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   if(result.length>=1){
	   console.log(result);
		res.send({code:1,msg:"登录成功",data:result});
   }else{
		res.send({code:0,msg:"用户名或密码错误"});
   }
 })
});
//编辑资料
userRouter.get("/edit",(req,res)=>{
 var uid = req.query.uid;
 var uname = req.query.uname;
 var tel = req.query.tel;
 var sex = req.query.sex;
 var pic = req.query.pic;
 var sql = "update zl_user set user_name=?,user_tel=?,user_sex=?,user_pic=? where user_id=?";
 pool.query(sql,[uname,tel,sex,pic,uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   if(result.length>=1){
	   console.log(result);
		res.send({code:1,msg:"编辑成功",data:result});
   }else{
		res.send({code:0,msg:"用户id不存在"});
   }
 })
});
//http://127.0.0.1:3000/user/edit?uname=test1&upwd=123456
module.exports=userRouter;