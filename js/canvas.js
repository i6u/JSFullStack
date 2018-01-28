'use strict';

let temp;
window.loadStockData = function (r) {
    var NUMS = 50, data = r.data;
    if (data.length > NUMS) {
        data = data.slice(data.length - NUMS);
    }
    data = data.map(function (x) {
        return {
            date: x[0],
            open: x[1],
            close: x[2],
            high: x[3],
            low: x[4],
            vol: x[5],
            change: x[6]
        };
    });
    window.drawStock(data);
    temp = data;
}

window.drawStock = function (data) {
    var canvas = document.getElementById('stock-canvas'),
        width = canvas.width,
        height = canvas.height,
        ctx = canvas.getContext('2d');


    // 清空画布
    ctx.clearRect(0, 0, width, height);
    // 画上背景
    ctx.fillStyle = '#2b3033';
    ctx.fillRect(0, 0, width, height);

    // 得出数据中的最大和最小值
    var highest = data.reduce(function (x, y) {
        return x.high > y.high ? x : y
    }).high;
    var lowest = data.reduce(function (x, y) {
        return x.low < y.low ? x : y
    }).low;

    // 计算每个柱形的宽度的一半（避免后面循环时需要除以二）
    var everyHalfWidth = width / data.length / 2;
    // 计算数据中最高点和最低点的差值
    var heightDiff = highest - lowest;

    // 获取某点在Canvas中的Y轴坐标
    var getRealY = function (point) {
        /*
        *（最大值 - 当前值）/ 差值 * 画布高度
        *
        * */
        return (highest - point) / heightDiff * height;
    };

    data.forEach((e, i) => {

        let// 获取柱形中心X坐标
            centerX = everyHalfWidth * (i * 2 + 1),
            // 获取最高点Y坐标
            highY = getRealY(e.high),
            // 获取最低点Y坐标
            lowY = getRealY(e.low),
            // 获取开盘点Y坐标
            openY = getRealY(e.open),
            // 获取收盘点Y坐标
            closeY = getRealY(e.close);

        // 根据开盘点和收盘点的高低来判断是红色还是蓝色
        if (highest === e.high) {
            ctx.fillStyle = '#f6d232';
            ctx.strokeStyle = '#ef44f6';
        } else if (lowest === e.low) {
            ctx.fillStyle = '#4054f6';
            ctx.strokeStyle = '#15f69f';
        } else if (openY > closeY) {
            ctx.fillStyle = '#F65655';
            ctx.strokeStyle = '#f61111';
        } else {
            ctx.fillStyle = '#56F1F2';
            ctx.strokeStyle = '#0ff2ef';
        }

        // 绘制柱形
        ctx.fillRect(centerX - everyHalfWidth, openY, everyHalfWidth * 2, closeY - openY);

        // 绘制中间线
        ctx.beginPath();
        ctx.moveTo(centerX, highY);
        ctx.lineTo(centerX, lowY);
        ctx.stroke();

    });
};

// 加载最近30个交易日的K线图数据:
var js = document.createElement('script');
js.src = 'http://img1.money.126.net/data/hs/kline/day/history/2015/0000001.json?callback=loadStockData&t=' + Date.now();
document.getElementsByTagName('head')[0].appendChild(js);
