const express=require('express');
const pool=require('../pool.js');
var dzscRouter=express.Router();
//点赞
dzscRouter.get("/dianzan",(req,res)=>{
 //1:获取参数uname/upwd
 var uid = req.query.uid;
 var pid = req.query.pid;
 //2:创建sql语句
 var sql = "INSERT INTO zl_storgr(sg_pid,sg_uid,sg_flag) VALUES (?,?,'0')";
 //3:执行sql语句
 pool.query(sql,[pid,uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"点赞是一种习惯",data:result});
 })
})
//收藏
dzscRouter.get("/store",(req,res)=>{
 //1:获取参数uname/upwd
 var uid = req.query.uid;
 var pid = req.query.pid;
 //2:创建sql语句
 var sql = "INSERT INTO zl_storgr(sg_pid,sg_uid,sg_flag) VALUES (?,?,'1')";
 //3:执行sql语句
 pool.query(sql,[pid,uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"收藏是一种习惯",data:result});
 })
})
//http://127.0.0.1:3000/dianzan?uid=1&pid=1

//查看我的赞
dzscRouter.get("/myzan",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 // http://127.0.0.1:3000?uname=tom&upwd=123 
 var uid = req.query.uid;
 console.log(1+":"+uid);
 //2:创建sql语句
 var sql = "SELECT po_id,po_url,po_des,po_tiid,sg_id,po_title FROM zl_post,zl_storgr WHERE po_id=sg_pid and sg_uid=? and sg_flag='0'";
 //3:执行sql语句
 pool.query(sql,[uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"我的赞查询成功",data:result})
 })
})
//http://127.0.0.1:3000/myzan?uid=2
//查看我的收藏
dzscRouter.get("/mysc",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 // http://127.0.0.1:3000?uname=tom&upwd=123 
 var uid = req.query.uid;
 console.log(1+":"+uid);
 //2:创建sql语句
 var sql = "SELECT po_id,po_url,po_des,po_tiid,sg_id,po_title FROM zl_post,zl_storgr WHERE po_id=sg_pid and sg_uid=? and sg_flag='1'";
 //3:执行sql语句
 pool.query(sql,[uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"我的收藏查询成功",data:result})
 })
})
//http://127.0.0.1:3000/mysc?uid=2
//取消赞和收藏
dzscRouter.get("/cancelzanandsc",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 // http://127.0.0.1:3000?uname=tom&upwd=123 
 var zanid = req.query.zanid;
 console.log(1+":"+zanid);
 //2:创建sql语句
 var sql = "delete from zl_storgr where sg_id=?";
 //3:执行sql语句
 pool.query(sql,[zanid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"我的收藏或赞取消成功",data:result})
 })
})
module.exports=dzscRouter;