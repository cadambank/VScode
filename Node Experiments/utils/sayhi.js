
function sayHi(name){
    console.log("Hi " + name + "!!");
}
//using module.exports parameter to specify which function to make available to be imported
//module.exports = {sayHi}

module.exports = sayHi;