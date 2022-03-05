const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : {
        type:String,
        required:true,
        lowercase:true
    },
    createdAt : {
        type:Date,
        immutable:true,
        default: ()=> Date.now()
    },
    updatedAt : {
        type:Date,
        default: ()=> Date.now()
    },
    bestFriend : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    address : {
        street : String,
        city : String
    }
});

userSchema.methods.sayHi = function (){
    console.log(`Hi, I am ${this.name}`);
}

userSchema.statics.findByName = function (name){
    return this.where({name : new RegExp(name, 'i')})
}

userSchema.pre("save",function(next){
    this.updatedAt = Date.now();
    next()
})

module.exports = mongoose.model("user",userSchema);
