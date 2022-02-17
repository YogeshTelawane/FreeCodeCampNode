const EventEmitter = require('events');

const CustomEvent = new EventEmitter();

CustomEvent.on('response', ()=>console.log('Hello from server'));
CustomEvent.on('response', ()=>console.log('some other logic'));

CustomEvent.emit('response');