var assert = require('assert');

describe('Async', function () {
    "use strict";

    let await = require('./await.js');
    let co = require('co');

    it('must return the same value sent', function (done) {
        "use strict";

        co(function* () {

            let response = yield await('hello');
            assert.equal(response, 'world');
            done();

        });

    });

    it('must throw an error', function (done) {
        "use strict";

        co(function *() {

            try {
                yield await('error');
            }
            catch (error) {
                assert.equal(error, 'error');
                done();
            }

        });

    });

    it('must throw an exception', function (done) {
        "use strict";

        co(function *() {

            try {
                yield await('exception');
            }
            catch (error) {
                assert.equal(error instanceof Error, true);
                assert.equal(error.message, 'exception');
                done();
            }

        });

    });

});
