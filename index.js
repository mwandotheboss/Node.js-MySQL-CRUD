const express = require('express'),
    app = express();

const db = require('./db'),
employeeRoutes = require('./controllers/employee.controller')


//middleware
app.use('/api/employees',employeeRoutes)


//first make sure db connection is successful
//Then start the server
db.query("SELECT 1")
    .then(() => {
        console.log('db connection succeed.')
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))