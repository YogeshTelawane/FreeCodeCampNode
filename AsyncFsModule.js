const { readFile, writeFile} = require('fs');

//Asynchronious way

console.log('task 1');

readFile('./content/demo.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    else{

        console.log(result);
    }
})

console.log('task 2');
console.log('task 3');

writeFile('./content/demo2.txt',"This is writeFile method of fs module", (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    else{

        console.log(result);
    }
})