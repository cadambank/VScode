const mongoose = require('mongoose');
const userModel = require('./user')

mongoose.connect("mongodb://todoAdmin:todo123@localhost/todoApp",()=>{
    console.log("Connected");
},e => console.error(e));

// try {const user = new userModel({
//     name:"mahesh"
//     ,age:"30"
//     ,email:"mahesh@test.com"
//     ,hobbies:[
//         "programming","javascript","learning"
//     ]
//     ,address:{
//         street: "30 main"
//     }
// });
// await user.save();
// console.log(user);
// }catch(e) {
// console.log(e);
// }
run()
async function run() {
try{ 
    const user = await userModel.findByName("mah")
    // user
    // user["hobbies"].push("data");
    // user.forEach((i)=>{
    //     i["hobbies"].push("data")
    //     i["email"] = "cadamban@test.com"
    //     i.save()
    // });
    
    console.log(user)
    
} 
catch(e){
    console.log(e);
}
}

