![项目结构图](http://cdn.friendlp.cn/1571332375738)

## 前言

blog-node 是采用了主流的前后端分离思想的，主里只讲 后端。

效果请看 [http://friendlp.cn](http://friendlp.cn)

## 已经实现功能

- [x] 登录
- [x] 文章管理
- [x] 标签管理
- [x] 评论
- [x] 留言管理
- [x] 用户管理
- [x] 友情链接管理
- [x] 时间轴管理
- [x] 身份验证
- [x] 项目展示
- [x] 第三方 github 授权登录
- [x] 文章归档

## 待实现功能

- [ ] 个人中心（用来设置博主的各种信息）
- [ ] 工作台（ 接入百度统计接口，查看网站浏览量和用户访问等数据 ）

## 技术

- node
- cookie-parser : "~1.4.3"
- crypto : "^1.0.1"
- express: "~4.16.0"
- express-session : "^1.15.6",
- http-errors : "~1.6.2",
- mongodb : "^3.1.8",
- mongoose : "^5.3.7",
- mongoose-auto-increment : "^5.0.1",
- yargs : "^12.0.2"

## 注意点

- 文章是分类型的：文章类型 => 1: 普通文章，2: 简历，3: 管理员介绍；而且简历和管理员介绍的文章只能是各自一篇（因为前台展示那里有个导航 关于我 ，就是请求管理员介绍这篇文章的，简历也是打算这样子用的），普通文章可以是无数篇。
- 点赞的用户 like_users 那里应该只保存用户 id 的，这个后面修改一下。
- 评论功能是实现了简单的三级评论的，第三者的评论（就是别人对一级评论进行再评论）放在 other_comments 里面。
- 评论是有状态的：状态 => 0 待审核 / 1 通过正常 / -1 已删除 / -2 垃圾评论。
- 管理一级和三级评论是设置前台能不能展示的，默认是展示，如果管理员看了，是条垃圾评论就 设置为 -1 或者 -2 ，进行隐藏，前台就不会展现了。

## Build Setup ( 构建安装 )

```
# install dependencies
npm install

# serve with hot reload at localhost: 3000
npm start

# build for production with minification
请使用 pm2 ，可以永久运行在服务器上，且不会一报错 node 程序就挂了。
```

## 项目常见问题


### 管理后台登录

管理后台登录是用 **邮箱加密码** 进行登录


### 管理员账号创建

![](http://cdn.friendlp.cn/1571306790685)

管理后台的登录账号并不是 admin/user ，也不是搭建 mongodb 数据库时创建的 user 用户，这里的账号和密码要自己创建，至于怎样创建呢？

#### 用 postman 调接口注册

如果是本地的可以像这样子创建，如果是服务器上的，请把 url 修改一下，

![注册](http://cdn.friendlp.cn/1571307105839)

- 1.  url

```
http://127.0.0.1:3000/register
```

- 2. param

```
{
 "name": "zhangsan",
 "password": "123456",
 "email": "xxx@qq.com",
 "phone": xxxxxxxxx,
 "type": 0,
 "introduce":"对自己的描述。"
}
```

这里的 type 为 0 是管理员账号，为 1 时，是普通用户。

## 项目地址与文档教程

**项目地址：**

> [前台展示: https://github.com/abughu/blog-react](https://github.com/lipenghu001/blog-fox-fe)

> [管理后台：https://github.com/abughu/blog-react-admin](https://github.com/lipenghu001/blog-fox-admin)

> [后端：https://github.com/abughu/blog-node](https://github.com/lipenghu001/blog-fox-be)

**本博客系统的系列文章：**


## 最后