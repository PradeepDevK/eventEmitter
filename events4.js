"use strict";

/**
 * 
 */

let emitter = require("events").EventEmitter;
let util = require('util');

function LoopProcessor(num) {
    let me = this;

    setTimeout(() => {
        for(let i = 1; i <= num; i++) {
            me.emit('BeforeProcess', i);
            console.log("Processing number: ", i);
            me.emit('AfterProcess', i);
        }
    }, 2000);

    return this;
}

util.inherits(LoopProcessor, emitter);

let lp = new LoopProcessor(4);

lp.on("BeforeProcess", (data) => {
    console.log("About to start the process for ", data);
});

lp.on("AfterProcess", (data) => {
    console.log("Completed processing ", data);
});