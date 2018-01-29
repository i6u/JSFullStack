'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var workDir = path.resolve('.');
// console.log(workDir);
// var filePath = path.join(workDir, 'pub', 'index.html');
// console.log(filePath);

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var filepath = path.join(workDir, 'temp', pathname);
    console.log(filepath);
    fs.stat(filepath, function (err, stat) {
        if (!err && stat.isFile) {
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        } else {
            console.log('404 ' + req.url);
            res.writeHead(404);
            res.end('404 Not Found\n'+filepath);
        }
    })
})

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');