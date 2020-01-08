'use strict';

/**
 * Raising and handling a custom event
 */

// get the reference of EventEmitter class of events module
let events =  require('events');

//create an object of EventEmitter class by using above reference
let em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on("FirstEvent", (data) => {
    console.log("First subscriber: ", data);
});

//Raising FirstEvent
em.emit("FirstEvent", "This is my first node.js event emitter example.");