const
    request = require('supertest'),
    app = require('../app');

describe('# test koa app', () => {

    let server = app.listen(9900);

    describe('#test server', () => {
        it('#test GET /', async () => {
            let res = await request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello, world!</h1>');
        });

        it('#test GET /path?name=witt',async () => {
            let res = await request(server)
                .get('/path?name=witt')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>Hello, witt!</h1>');
        });
    });
});