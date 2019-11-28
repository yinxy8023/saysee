//vue_server_000/app.js
//功能：服务器端程序
//1:下载四个模块
//  express			web服务器
//  cors				处理跨域
//  express-session	会话session对象
//2:vue_server_000/进入命令行
//  npm i mysql express express-session cors
//3:加载三个第三方模块
const express = require("express");
const cors = require("cors");
const session = require("express-session");
//引入body-parser
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const postRouter=require('./routes/post.js');
const dzscRouter=require('./routes/dzsc.js');
const gzRouter=require('./routes/gz.js');
const centerRouter=require('./routes/center.js');
const recommandRouter=require('./routes/recommand.js');
const imgRouter=require('./routes/img.js');

//4:创建web服务器
var server = express();
//5:配置跨域  允许程序列表
//  http://127.0.0.1:8080
//  http://localhost:8080
server.use(cors({
   origin:["http://127.0.0.1:8080","http://localhost:8080"],
   credentials:true  //每次请求验证
}))
//6:配置session环境
server.use(session({
   secret:"128位安全字符串",
   resave:true,         //请求更新数据 
   saveUninitialized:true//保存初始数据
}));
//7:配置静态目录 pubic
//7.1:创建public
server.use(express.static("public"))
server.use(bodyParser.urlencoded({
	extended:false
}));
//8:启动监听端口  3000
server.listen(3000);
server.use('/user',userRouter);
server.use('/post',postRouter);
server.use('/dzsc',dzscRouter);
server.use('/gz',gzRouter);
server.use('/center',centerRouter);
server.use('/recommand',recommandRouter);
server.use('/img',imgRouter);