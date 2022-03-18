const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'myappadmin', 
     password: 'myappadmin@123',
     connectionLimit: 5
});

const {createUser,deleteUser,updateUser} = require('./model/userCRUD')

createUser(pool,'Hema','Hema@123','Hema@test.com');
createUser(pool,'Hema','Hema@123','Hema@test.com');
updateUser(pool,'Hema2','Hema@123','Hema@test.com');
deleteUser(pool,'Hema@test.com');
