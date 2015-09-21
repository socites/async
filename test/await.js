var async = require('..');
module.exports = async(function* (resolve, reject, param) {
    "use strict";

    if (param === 'error') setTimeout(function () {
        reject(param);
    }, 100);
    else if (param === 'hello') setTimeout(function () {
        resolve('world');
    }, 100);
    else setTimeout(function () {
            reject(new Error(param));
        }, 100);

});
