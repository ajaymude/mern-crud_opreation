const mongoose = require('mongoose')

const dbconnection =async()=>{

    try {
        mongoose.set('strictQuery', true)
        await  mongoose.connect('mongodb://127.0.0.1:27017/crudHardwork')
        console.log('db is connected')
    } catch (error) {
        console.log('db is not connected' , error )
    }
}
module.exports = dbconnection