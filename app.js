require('dotenv').config()
const  express = require('express')
const connectDB = require('./database/connect')
const app = express()


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