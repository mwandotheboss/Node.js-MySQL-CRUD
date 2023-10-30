const express = require('express')
router = express.Router()

//http:localhost:3000/api/employees/
router.get('/', (req, res) => {
    res.send('list of employees')
})

module.exports = router;