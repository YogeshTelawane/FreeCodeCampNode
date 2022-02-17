const fs = require('fs');

//Streams are use to read or write file sequentially unlike readFile and writeFile which will read the whole file first.
//streams reads the file in chunks

const stream = fs.createReadStream('./content/bigFile.txt');

stream.on('data',(result)=>{console.log(result)})