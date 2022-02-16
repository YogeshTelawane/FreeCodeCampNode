//Globals - 

// As in vanilla Js we have a window or document object in node js we dont have those.As
// we have 

// __dirname : to get the  current directory name
// __filename: to get the file name
// require: function to use modules
// process: info about the env where the program is running

setInterval(()=>{
console.log(__dirname);
},1000)