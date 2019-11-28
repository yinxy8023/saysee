const express=require('express');
const pool=require('../pool.js');
var gzRouter=express.Router();
//关注他人
gzRouter.get("/guanzhu",(req,res)=>{
 //1:获取参数uname/upwd
 var uid = req.query.uid;
 var wuid = req.query.wuid;
 //2:创建sql语句
 var sql = "INSERT INTO zl_pub(pub_uid,pub_wuid) VALUES (?,?)";
 //3:执行sql语句
 pool.query(sql,[uid,wuid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"关注成功",data:result});
  })
});
//取消关注
gzRouter.get("/cancelguanzhu",(req,res)=>{
 //1:获取参数
 var gzid = req.query.gzid;
 //2:创建sql语句
 var sql = "DELETE FROM zl_pub WHERE pub_id=?";
 //3:执行sql语句
 pool.query(sql,[gzid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"取消关注成功",data:result});
  })
});
module.exports=gzRouter;