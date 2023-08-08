const express = require('express');
require('dotenv').config()
const connectDB =require('./config/db')
const colors =require('colors')
const welcomeRoute=require('./routes/home.routes');
const userRoutes =require('./routes/user.routes')

const adminRoutes = require('./routes/admin.routes')
const subAdminRoutes = require('./routes/subAdmin.routes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware.js')

connectDB()
const app = express();
app.use(express.json())


app.use('/', welcomeRoute);
app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/subAdmin', subAdminRoutes)

app.use(notFound)
app.use(errorHandler)

const port= process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started in ${process.env.NODE_ENV} mode at ${port}: `.yellow.bold)
})