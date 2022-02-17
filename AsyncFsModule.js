const { readFile, writeFile, writeFileSync} = require('fs');

//Asynchronious way

// console.log('task 1');

// readFile('./content/demo.txt','utf8', (err, result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{

//         console.log(result);
//     }
// })

// console.log('task 2');
// console.log('task 3');

for(i=0; i< 10000;i++){
writeFileSync('./content/bigFile.txt',`Hello ${i}`,{flag: 'a'})
}