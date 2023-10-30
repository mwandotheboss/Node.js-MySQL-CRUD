const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Networks@25',
    database: 'employee_db'
})


module.exports = mysqlPool