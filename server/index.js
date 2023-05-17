const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller.js')
const { errorHandler } = require('./middlewares')

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors({origin: 'https://gitauemployees.vercel.app/'}))
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)


connectDb() 
.then(()=>{
    console.log('DB connection succesful');
    app.listen(3000, ()=> console.log('Server started at port 3000'))

})
.catch(err => console.log(err))
