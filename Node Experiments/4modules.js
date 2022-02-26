//using require to import available variables/constants and functions from the module.exports 
//specified in source file

const names = require('./utils/variables');
const sayHi = require('./utils/sayhi');

for (var i in names) {
    sayHi(names[i]);
}