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

fileReader("./content/demo.txt")
  .then((res) => {
    console.log(res);
    return fileReader("./content/demo2.txt");
  })
  .then((res2) => console.log(res2))
  .catch((err) => console.log(err));

module.exports = fileReader;