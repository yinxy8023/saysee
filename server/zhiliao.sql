SET NAMES UTF8;
DROP DATABASE IF EXISTS zhiliao;
CREATE DATABASE zhiliao CHARSET=UTF8;
USE zhiliao;
#用户表
CREATE TABLE zl_user(
   user_id  INT  PRIMARY KEY AUTO_INCREMENT,#用户id
   user_name  VARCHAR(50) NOT NULL,#用户名称
   user_tel VARCHAR(13) NOT NULL,#用户手机号
   user_pwd VARCHAR(15) NOT NULL,#用户密码
   user_sex VARCHAR(1),#用户性别 0-女 1-男
   user_pic VARCHAR(50) #用户头像存储路径
);
INSERT INTO zl_user(user_name,user_tel,user_pwd) VALUES('test1','18366108075','123456');
#笔记表
CREATE TABLE zl_post(
   po_id  INT  PRIMARY KEY AUTO_INCREMENT,#笔记编号
   po_uid  INT NOT NULL,#用户id
   po_url VARCHAR(300) NOT NULL,#笔记的图片或者视频
   po_des VARCHAR(500) NOT NULL,#笔记的文字描述
   po_tiid INT ,#笔记主题
   po_title VARCHAR(30) NOT NULL#笔记标题
);
INSERT INTO zl_post(po_uid,po_url,po_des,po_tiid,po_title) VALUES (1,'public/01.png','美妆类笔记',1,'今天化了很美的妆');
INSERT INTO zl_post(po_uid,po_url,po_des,po_tiid,po_title) VALUES (1,'public/02.png','穿搭类笔记',2,'今天进行了多组穿搭');
INSERT INTO zl_post(po_uid,po_url,po_des,po_tiid,po_title) VALUES (1,'public/03.png','护肤类笔记',3,'精致的猪猪girl都在用的水');
#点赞收藏表
CREATE TABLE zl_storgr(
   sg_id  INT  PRIMARY KEY AUTO_INCREMENT,#操作编号
   sg_pid  INT NOT NULL,#笔记id
   sg_uid INT NOT NULL,#操作用户id
   sg_flag VARCHAR(1) NOT NULL#操作标志 0-赞 1-收藏
);
INSERT INTO zl_storgr(sg_pid,sg_uid,sg_flag) VALUES (1,2,0);
INSERT INTO zl_storgr(sg_pid,sg_uid,sg_flag) VALUES (2,2,0);
INSERT INTO zl_storgr(sg_pid,sg_uid,sg_flag) VALUES (2,1,1);
INSERT INTO zl_storgr(sg_pid,sg_uid,sg_flag) VALUES (3,1,0);
#关注表
CREATE TABLE zl_pub(
   pub_id  INT  PRIMARY KEY AUTO_INCREMENT,#关注关系编号
   pub_uid  INT NOT NULL,#关注用户编号
   pub_wuid INT NOT NULL#被关注用户编号
);
INSERT INTO zl_pub(pub_uid,pub_wuid) VALUES (1,2);
INSERT INTO zl_pub(pub_uid,pub_wuid) VALUES (1,3);
#用户感兴趣话题表
CREATE TABLE zl_in(
   in_id  INT  PRIMARY KEY AUTO_INCREMENT,#编号
   in_uid  INT NOT NULL,#用户编号
   in_tid VARCHAR(10) NOT NULL#话题编号
);
INSERT INTO zl_in(in_uid,in_tid) VALUES (1,'1,2,3');
#话题表
CREATE TABLE zl_title(
   ti_id  INT  PRIMARY KEY AUTO_INCREMENT,#话题编号
   ti_name VARCHAR(30) NOT NULL#话题名称
);
INSERT INTO zl_title(ti_name) VALUES ('美妆');
INSERT INTO zl_title(ti_name) VALUES ('穿搭');
INSERT INTO zl_title(ti_name) VALUES ('护肤');
INSERT INTO zl_title(ti_name) VALUES ('亲子');
INSERT INTO zl_title(ti_name) VALUES ('修');
#评论表
CREATE TABLE zl_pinglun(
   pl_id  INT  PRIMARY KEY AUTO_INCREMENT,#评论编号
   pl_content VARCHAR(100) NOT NULL,#评论内容
   pl_pid INT NOT NULL,#笔记编号
   pl_uid INT NOT NULL#用户编号
);
INSERT INTO zl_pinglun(pl_content,pl_pid,pl_uid) VALUES ('一条评论一条评论',1,1);
INSERT INTO zl_pinglun(pl_content,pl_pid,pl_uid) VALUES ('随意评论',1,2);