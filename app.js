require('dotenv').config()
require('express-async-errors');

const  express = require('express')
const connectDB = require('./database/connect')
const app = express()
const authRouter = require('./routes/auth')
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');
app.use(express.json());


//routes
app.use('/api/v1/auth',authRouter)

//middlewares
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()