const mongoose = require('mongoose')
require('dotenv').config();


const dbUri = process.env.dbUri

 
module.exports = ()=>{
    return mongoose.connect(dbUri)

}
