'use strict';

/**
 * Return EventEmitter from a function
 */

let emitter = require('events').EventEmitter;

function LoopProcessor(num) {
    let e = new emitter();

    setTimeout(() => {
        for (let i = 1; i <= num; i++) {
            e.emit("BeforeProcess", i);
            console.log("Processing number: ", i);
            e.emit("AfterProcess", i);
        }
    }, 2000);

    return e;
}

let lp = LoopProcessor(4);

lp.on("BeforeProcess", (data) => {
    console.log("About to start the process for ", data);
});

lp.on("AfterProcess", (data) => {
    console.log("Completed processing ", data);
});