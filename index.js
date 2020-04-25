// 引入框架
var express = require('express');

// 实例化express对象
var app = express();

// 配置视图引擎
app.set('view engine', 'ejs');

// 让服务器能够识别外部样式表
app.use('/assets',express.static('assets'));

// 通过对象调用方法
// 根据用户请求的地址返回对应的数据
app.get('/', (req,res) => {
    // console.log(req.url);
    res.render('index')
});

app.get('/about', (req,res) => {
    // console.log(req.url);
    res.render('about')
});

// 路由参数
app.get('/profile/:id', (req,res) => {
    var data = [{age:25, name:[{name:'Summer'},{name:"Emily"}]},{age:29, name:[{name:'Amy'},{name:'Henry'},{name:'John'}]}];
    res.render('profile', {websiteName:req.params.id,data:data})
});

// 监听服务器的端口号
app.listen(3333);