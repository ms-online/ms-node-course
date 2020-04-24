// console.log('Hello from Node.js...');

// 引入模块
// const person = require('./person');

// console.log(person.name);

// const Person = require('./person');
// const person1 = new Person('Summer', 25);
// person1.greeting();

// ------------------分割符------------------------
// 引入模块
const http = require('http');
const path = require('path');
const fs = require('fs');

// 创建变量，存储服务器对象
const server = http.createServer((req,res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public','index.html'), (err, data) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(data);
    //     })
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public','about.html'), (err, data) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(data);
    //     })
    // }

    // if(req.url === '/api/users'){
    //    const users = [
    //        {name: 'Summer', age: 25},
    //        {name: 'Lucy', age:28}
    //    ];
    //    res.writeHead(200, {'Content-Type': 'application/json'});
    //    res.end(JSON.stringify(users));
    // }

    // 创建变量存储文件路径
    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html': req.url);
    
    // 初始化content type
    let contentType = 'text/html';

    // 文件扩展名
    let extname = path.extname(filePath);

    // 通过验证扩展名设置content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType ='application/json';
            break;
        case '.png':
            contentType ='image/png';
            break;
        case '.jpg':
            contentType ='image/jpg';
            break;
    }

    // 读取文件
    fs.readFile(filePath,(err, data) =>{
        if(err){
            if(err.code === 'ENOENT'){
                // 没有找到页面
                fs.readFile(path.join(__dirname,'public', '404.html'), (err,data)=> {
                    if(err) throw err;
                    res.writeHead(200, {'Content-type': 'text/html'});
                    res.end(data, 'utf8');
                })
            }else{
                //其他服务器错误
                res.writeHead(500);
                res.end(`服务器错误：${err.code}`);
            }
        }else{
            //成功
            res.writeHead(200, {'Content-type': contentType});
            res.end(data, 'utf8');
        }
    })
});

// 端口号
const PORT = process.env.PORT ||9999;

// 监听端口号
server.listen(9999, ()=> console.log(`服务器已经在${PORT}端口号运行...`));