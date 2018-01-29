'use strict';
let s = 'Hello, ';

function greet(params) {
    console.log(s + params);
}

function hi(params) {
    console.log('hi, ' + params);
}

function goodbye(params) {
    console.log('goodbye, ' + params);
}

module.exports = {
    greet:greet,
    hi:hi,
    goodbye:goodbye
}