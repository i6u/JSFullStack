'use strict'

let fs = require('fs');

function write_file(path, data) {
    fs.writeFile(path, data, function name(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('write file ok!');
        }
    });
}

function read_file(path) {
    fs.readFile(path, 'utf-8', function name(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('read file ok! ' + data);
        }
    });
}

function stat_file(path) {
    fs.stat(path, function (err, stat) {
        if (err) {
            console.log(err);
        } else {
            // 是否是文件:
            console.log('isFile: ' + stat.isFile());
            // 是否是目录:
            console.log('isDirectory: ' + stat.isDirectory());
            if (stat.isFile()) {
                // 文件大小:
                console.log('size: ' + stat.size);
                // 创建时间, Date对象:
                console.log('birth time: ' + stat.birthtime);
                // 修改时间, Date对象:
                console.log('modified time: ' + stat.mtime);
            }
        }
        return stat;
    })
}

function _write(params) {
    var noneExistFileName = ['async_create.', new Date() - 0, '.txt'].join('');
    fs.writeFile(noneExistFileName, '文件不存在，则创建', function (err) {
        if (err) throw err;
        console.log(noneExistFileName + '不存在，被创建了！');
    });
}

module.exports = {
    write_file: write_file,
    read_file: read_file,
    stat_file: stat_file,
    _write:_write
}