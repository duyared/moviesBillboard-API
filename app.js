require('dotenv').config()
require('express-async-errors');

const  express = require('express')
const connectDB = require('./database/connect')
const app = express()
const authRouter = require('./routes/auth')

app.use(express.json());


//routes
app.use('/api/v1/auth',authRouter)


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