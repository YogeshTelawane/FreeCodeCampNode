//Synchronious way

const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

console.log('task 1');

const read = readFileSync('./content/demo.txt', 'utf8');

console.log(read);
console.log('task 2');
console.log('task 3');

//const write = writeFileSync('./content/demo.txt', "Hello from yogesh")



