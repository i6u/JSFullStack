require('babel-core/register')({
    presets: ['stage-3']
});

const model = require('./model');
models.sequelize.sync().then(() => {
    console.log('sync done, db inited');
    console.log('init db ok.');
    process.exit(0);
}).catch((e) => {
    console.log(`failed:${e}`);
    process.exit(0);
});