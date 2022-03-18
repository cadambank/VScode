
async function createUser(pool,name,pwd,emailid) {
  
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

async function updateUser(pool,name,pwd,emailid) {
  
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

async function deleteUser(pool,emailid) {
  
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

module.exports = {createUser,deleteUser,updateUser};