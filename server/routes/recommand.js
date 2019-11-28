const express=require('express');
const pool=require('../pool.js');
var recommRouter=express.Router();
//保存用户选中的爱好
recommRouter.get("/userin",(req,res)=>{
 //1:获取参数uname/upwd
 var uid = req.query.uid;
 var tids = req.query.tids;
 //2:创建sql语句
 var sql = "INSERT INTO zl_in(in_uid,in_tid) VALUES (?,?)";
 //3:执行sql语句
 pool.query(sql,[uid,tids],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"保存爱好成功",data:result});
  })
});
//根据用户关注进行推荐
recommRouter.get("/recomByuserin",(req,res)=>{
 //1:获取参数
 var uid = req.query.uid;
 //var tids=req.query.tids;
 var sql1=`SELECT in_tid FROM zl_in WHERE in_uid=?`;
 pool.query(sql1,[uid],(err,resu)=>{
	if(err)throw err;
	//2:创建sql语句
	 var sql = `SELECT po_id,po_url,po_des,po_title FROM zl_post WHERE po_tiid IN (${resu[0].in_tid})`;
	 //3:执行sql语句
	 pool.query(sql,(err,result)=>{
	   //err 严重错误，程序停止
	   if(err)throw err;
	   res.send({code:1,msg:"根据喜好进行推荐",data:result});
	  })
 });
 
});
//http://127.0.0.1:3000/recommand/recomByuserin?uid=1
module.exports=recommRouter;