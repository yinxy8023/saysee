const express=require('express');
const pool=require('../pool.js');
var postRouter=express.Router();
//发布笔记
postRouter.get("/fabupost",(req,res)=>{
 //1:获取参数
 var uid = req.query.uid;
 var url = req.query.url;
 var des = req.query.des;
 var tiid = req.query.tiid;
 var title = req.query.title;
 //2:创建sql语句
 var sql = "INSERT INTO zl_post(po_uid,po_url,po_des,po_tiid,po_title) VALUES (?,?,?,?,?)";
 //3:执行sql语句
 pool.query(sql,[uid,url,des,tiid,title],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"发布成功",data:result});
 })
})
//http://127.0.0.1:3000/post/fabupost?
//查看我的笔记列表
postRouter.get("/mypost",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 var uid = req.query.uid;
 console.log(1+":"+uid);
 //2:创建sql语句
 var sql = "SELECT po_id,po_url,po_des,po_title FROM zl_post WHERE po_uid=?";
 //3:执行sql语句
 pool.query(sql,[uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"我的笔记列表查询成功",data:result});
 })
})
//http://127.0.0.1:3000/post/mypost?uid=1
//查看我的笔记详情
postRouter.get("/mypostdetail",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 var id = req.query.id;
 console.log(1+":"+id);
 //2:创建sql语句查询笔记的具体信息
 var sql = "SELECT po_id,po_url,po_des,po_tiid,po_title FROM zl_post WHERE po_id=?";
 //3:执行sql语句
 pool.query(sql,[id],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   //查询本笔记赞的数量
   var sql1="SELECT count(1) FROM zl_storgr WHERE sg_pid=? and sg_flag='0'";
   pool.query(sql1,[id],(err,res1)=>{
		if(err)throw err;
	   //查询本笔记收藏的数量
	   var sql2="SELECT count(1) FROM zl_storgr WHERE sg_pid=? and sg_flag='1'";
		pool.query(sql2,[id],(err,res2)=>{
			if(err)throw err;
			res.send({code:1,msg:"我的笔记详情查询成功",data:result,zan:res1,sc:res2});
		})
   })
 })
})
//http://127.0.0.1:3000/post/mypostdetail?id=1
//搜索笔记
postRouter.get("/searchpost",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 // http://127.0.0.1:3000?uname=tom&upwd=123 
 var con = req.query.con;
 console.log(1+":"+con);
 //2:创建sql语句
 var sql = "select po_id,po_uid,po_url,po_des,po_tiid,po_title from zl_post where instr(po_des,?)>0";
 //3:执行sql语句
 pool.query(sql,[con],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   res.send({code:1,msg:"搜索成功",data:result})
 })
})
//http://127.0.0.1:3000/post/searchpost?con=护肤
module.exports=postRouter;