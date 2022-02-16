//Synchronious way

const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

const read = readFileSync('./content/demo.txt', 'utf8');

console.log(read);

const write = writeFileSync('./content/demo.txt', "Hello from yogesh")



