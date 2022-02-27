const {readFileSync, writeFileSync} = require('fs');

const generictext1 = readFileSync('genericfolder/generictext.txt','utf8');
console.log(generictext1);
const generictext2 = readFileSync('genericfolder/generictext2.txt','utf8');
console.log(generictext2);

const _ = writeFileSync('genericfolder/generictext3.txt',` ${generictext1} , ${generictext2}`,{flag:'a'});

const generictext3 = readFileSync('genericfolder/generictext3.txt','utf8');
console.log(generictext3);