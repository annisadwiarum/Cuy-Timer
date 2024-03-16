const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mySQLnisa710',
  database: 'cuytimer' 
})

connection.connect()

module.exports = connection