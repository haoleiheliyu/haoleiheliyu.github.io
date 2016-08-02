var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
// var users = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


// 代码从这里开始
// routes(app);
var users={};
app.get('/client',function (req,res) {
    res.sendfile('views/index.html');
})
app.get('/signin',function (req,res) {
    res.sendfile('views/signin.html');
})

app.get('/', function (req,res) {
      if(req.cookies.user==null)
     {
     res.redirect('/signin');
     }
     else
     {
     res.sendfile('views/index.html');
     }

});

app.post('/signin',function (req,res) {
    if(users[req.body.name])
    {
        res.redirect('/signin');
    }
    else
    {
        res.cookie("user",req.body.name,{maxAge:1000*60*60*24*30});
        res.redirect('/');
    }
})



/*var server = http.createServer(app);
var io = require('socket.io').listen(server);*/
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);
io.sockets.on('connection', function (socket) {
    socket.on('online',function (data) {
        socket.name=data.user;
        if(!users[data.user])
        {
            users[data.user]=data.user;
        }
        else
        {
            io.sockets.emit('online',{users:users,user:data.user});
        }
    })

    //有人发话
    socket.on('say', function (data) {
        if (data.to == 'all') {
            //向其他所有用户广播该用户发话信息
            socket.broadcast.emit('say', data);
        } else {
            //向特定用户发送该用户发话信息
            //clients 为存储所有连接对象的数组
            var clients = io.sockets.clients();
            //遍历找到该用户
            clients.forEach(function (client) {
                if (client.name == data.to) {
                    //触发该用户客户端的 say 事件
                    client.emit('say', data);
                }
            });
        }

        //有人下线
        socket.on('disconnect', function() {
            //若 users 对象中保存了该用户名
            if (users[socket.name]) {
                //从 users 对象中删除该用户名
                delete users[socket.name];
                //向其他所有用户广播该用户下线信息
                socket.broadcast.emit('offline', {users: users, user: socket.name});
            }
        });
    });


});





// 在这里结束


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
