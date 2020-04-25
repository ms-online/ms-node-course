// 引入框架
var express = require('express');

// 实例化express对象
var app = express();

// 通过对象调用方法
// 根据用户请求的地址返回对应的数据
app.get('/', (req,res) => {
    console.log(req.url);
    res.send('欢迎来到米修在线主页')
});

app.get('/about', (req,res) => {
    console.log(req.url);
    res.send('欢迎来到关于我们页面！')
});

// 路由参数
app.get('/profile/:id', (req,res) => {
    res.send('您所访问的路由参数为：' + req.params.id)
});

// 监听服务器的端口号
app.listen(3333);