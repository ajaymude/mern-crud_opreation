const express = require('express')
const app = express()
const port = process.env.port || 8000
const dbconnection = require('./database/db')
const router = require('./routes/userRouter')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//db connection
dbconnection()

app.use('/', router)

app.listen(port , ()=>{ console.log('server is runnig on port ')})