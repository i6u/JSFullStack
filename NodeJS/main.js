'use strict'

const hello = require('./hello');
const fs = require('./m_fs');

var name = 'Witt';
hello.greet(name);
hello.hi(name);
hello.goodbye(name);


var path = './temp/outfile.txt';
// fs.write_file(path,name);
// fs.read_file(path);
// fs.stat_file(path);

fs._write()


