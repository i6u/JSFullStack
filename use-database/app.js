'use strict'

const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
});

var now = Date.now();

// Pet.create({
//         id: 'g-' + now,
//         name: 'witt',
//         gender: true,
//         birth: '1991-09-12',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     }).then(p => console.log('created.' + JSON.stringify(p)))
//     .catch(err => console.log('failed: ' + err));

// (async () => {
//     var dq = await Pet.create({
//         id: 'd-' + now,
//         name: 'dq',
//         gender: true,
//         birth: '1995-01-12',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(dq));
// })();


(async () => {
    var dq = await Pet.findAll({
        where: {
            name: 'dq'
        }
    });
    dq.forEach(v => {
        console.log(JSON.stringify(v));
    });
})();

(async () => {
    var p = await Pet.find({
        where: {
            id: 'g-1517257504102'
        }
    });
    p.name = 'zhou'
    p.gender = true;
    p.updatedAt = Date.now();
    p.version ++;
    await p.save();
})();

setTimeout(() => {
    global.process.exit();
}, 3000);