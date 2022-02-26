const path = require('path');

console.log(path.sep);


//normalise the filepath with system filepath seperator
const filepath = path.join('/utils/','genericfolder','generictext.txt');
console.log(filepath);


const basepath = path.basename(filepath);
console.log(basepath);


//absolutepath
const absolute = path.resolve(__dirname,'utils','genericfolder','generictext.txt');
console.log(absolute);