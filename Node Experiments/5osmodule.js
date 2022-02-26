const os = require('os');

//info on user
const user = os.userInfo();
console.log(user);


//info on uptime
console.log(`The system uptime is ${os.uptime()} seconds`)


currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};

console.log(currentOs);