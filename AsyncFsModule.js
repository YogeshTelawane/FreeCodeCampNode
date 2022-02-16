const { readFile, writeFile} = require('fs');

//Asynchronious way

readFile('./content/demo.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    else{

        console.log(result);
    }
})

writeFile('./content/demo2.txt',"This is writeFile method of fs module", (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    else{

        console.log(result);
    }
})