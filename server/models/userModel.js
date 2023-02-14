const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:String
})

const usermodel = mongoose.model('user', userSchema)

module.exports = usermodel