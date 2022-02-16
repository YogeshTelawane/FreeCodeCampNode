const path = require('path');

const filePath = path.join('/content', '/picture', 'banner.jpg')
//output - \content\picture\banner.jpg

console.log(filePath);

//last file name
const base = path.basename(filePath);
console.log(base);

//output - banner.jpg

