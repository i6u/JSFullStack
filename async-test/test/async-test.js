const assert = require('assert');
const hello = require('../hello');

describe('#hello.js', () => {

        it('# async function base', (done) => {
            (async () => {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 25);
                    done();
                } catch (error) {
                    done(error);
                }
            })();
        })

        describe('#async hello easy', () => {
            it('# async function', async () => {
                let r = await hello();
                assert.strictEqual(r, 15);
            });
    
    });
});