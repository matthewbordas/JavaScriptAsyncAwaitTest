"use strict";
async function runner() {
    try {
        await promiseError();
    }
    catch (error) {
        console.log(error);
    }
    return new Error('error');
}
function promiseError() {
    return new Promise((resolve, reject) => {
        resolve(new String('ok'));
    });
}
// This should run fine
console.log(runner());
