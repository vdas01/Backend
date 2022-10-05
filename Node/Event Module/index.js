//Events
// where you can create, listen, fire own events
//e.g 1 :-  Registering for the event to be fired only one time using once.
//e.g 2:- Create an event emitter instance and register a couple of callbacks.
//e.g 3 :- Registering for the event with callback parameters.


const EventEmitter = require('events');   //class

const event = new EventEmitter();     //object

// event.on('sayMyName',()=>{
//     console.log('your name is vishal');
// });      //listen or define

// event.on('sayMyName',()=>{
//     console.log('How are you?');
// });

// event.on('sayMyName',()=>{
//     console.log('Are you fine');
// });

// event.emit('sayMyName')    //call

// event.on('checkPage',(statuscode,mssg)=>{
//     console.log(`Status code is ${statuscode} and the page is ${mssg}`);
// })

// event.emit('checkPage',200,'ok');   //passing parameters