const {readFile, writeFile} = require('fs');

let generictext1 = 'Default';
readFile('./genericfolder/generictext.txt','utf8',(err,result)=>{
    if(err) generictext1 = 'Error: \n' + err;
    generictext1 =  result; 
    console.log(generictext1);
    readFile('./genericfolder/generictext2.txt','utf8',(err,result)=>{
        if(err) generictext1 = 'Error: \n' + err;
        generictext1 =  generictext1 + ' ' + result; 
        console.log(generictext1);
        writeFile('./genericfolder/generictext3.txt',generictext1,{flag:'a'},(err,result)=>{
            if(err) generictext1 = 'Error: \n' + err;
            console.log(generictext1);
        });
    });
});

console.log(generictext1);
