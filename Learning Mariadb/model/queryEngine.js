const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost', 
  user:'myappadmin', 
  password: 'myappadmin@123',
  connectionLimit: 5
});
async function createUser(name,pwd,emailid) {
  
  try {
	conn = await pool.getConnection();
	const rows = await conn.query(`
  call myapp.CreateUser(
    '${name}',
    '${pwd}',
    '${emailid}'
    );
  `);
	console.log(rows); 
  } catch (err) {
	console.log(err.text);
  } finally {
	if (conn) return conn.end();
  }
}

async function updateUser(name,pwd,emailid) {
  
  try {
	conn = await pool.getConnection();
	const rows = await conn.query(`
  call myapp.UpdateUser(
    '${name}',
    '${pwd}',
    '${emailid}'
    );
  `);
	console.log(rows); 
  } catch (err) {
	console.log(err.sql.text);
  } finally {
	if (conn) return conn.end();
  }
}

async function deleteUser(emailid) {
  
  try {
	conn = await pool.getConnection();
	const rows = await conn.query(`
  call myapp.DeleteUser(
    '${emailid}'
    );
  `);
	console.log(rows); 
  } catch (err) {
	console.log(err.sql.text);
  } finally {
	if (conn) return conn.end();
  }
}

async function getUser(id,name,pwd,emailid) {
  
  try {
	conn = await pool.getConnection();
	const rows = await conn.query(`
  call myapp.GetUser(
    '${name}',
    '${pwd}',
    '${emailid}',
    '${id}'
    );
  `);
	console.log(rows); 
  } catch (err) {
	console.log(err.sql.text);
  } finally {
	if (conn) return conn.end();
  }
}



module.exports = {createUser,deleteUser,updateUser,getUser};