const express=require('express')
const bodyparser=require('body-parser')
const cors = require('cors');
const app=express()

const authroutes=require('./routes/authRoutes')
const trainingroutes=require('./routes/trainingRoutes')
const corsOptions = {
    origin: ['http://127.0.0.1:3000','http://127.0.0.1:3000'], // Replace with your allowed origin
    methods: 'GET,POST,DELETE',
    credentials: true,
    exposedHeaders: 'Set-Cookie',
  };
app.use(cors(corsOptions));
app.use(bodyparser.json())
app.use('/api/auth',authroutes)
app.use('/api/training',trainingroutes)

//error handling middleware
app.use((error,req,res,next)=>{
    error.statusCode=error.statusCode||500
    error.status=error.status||'error'
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message
    })
})
module.exports=app