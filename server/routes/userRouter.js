const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/userController')

router.post('/adduser', usercontroller.adduser )
router.get('/alluser', usercontroller.alluser )
router.get('/alluser/:id', usercontroller.alluserupdate )
router.post('/alluser/:id', usercontroller.alluserupdateone )
router.post('/delete/:id', usercontroller.deleteuser )

module.exports= router