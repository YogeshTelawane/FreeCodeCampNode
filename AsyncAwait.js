const fs = require("fs");


const fileReader = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };


  const AsyncFileReader = async ()=>{
    const first = await fileReader('./content/demo.txt')
    console.log(first);
    const two = await fileReader('./content/demo2.txt')
    console.log(two);
  }

  AsyncFileReader();