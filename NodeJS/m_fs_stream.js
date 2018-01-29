'use strict'

var fs = require('fs')

function ws() {

    var ws1 = fs.createWriteStream('./temp/m_fs_stream1.txt', 'utf-8');
    ws1.write('使用Stream写入文本数据...\n');
    ws1.write('END.');
    ws1.end();

    var ws2 = fs.createWriteStream('./temp/m_fs_stream2.txt');
    ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
    ws2.write(new Buffer('END.', 'utf-8'));
    ws2.end();
}

function rs() {
    var rs1 = fs.createReadStream('./temp/m_fs_stream1.txt', 'utf-8');
    rs1.on('data', function (chunk) {
        console.log('data:', chunk);
    })

    rs1.on('end', function () {
        console.log('end');
    })

    rs1.on('error', function (err) {
        console.log('error: ' + err);
    })

}

function pipe() {
    var fs = require('fs');
    var rs = fs.createReadStream('./temp/m_fs_stream1.txt');
    var ws = fs.createWriteStream('./temp/m_fs_stream2.txt');
    rs.pipe(ws);
}
