var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
     fs.readFile(__dirname +req.url+'.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading '+req.url+'.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {
    socket.emit('message', 'hello ');

    socket.on('trace_stream', function (data) {
        console.log(data);
    });
    socket.on('message', function (data) {
       // console.log(data);
    });

    io.sockets.emit('message', 'hello1 ')
});