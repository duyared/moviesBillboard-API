require('dotenv').config()
require('express-async-errors');

const  express = require('express')
const connectDB = require('./database/connect')
const app = express()
const cors = require('cors')
const authRouter = require('./routes/auth')
const favoritesRouter = require('./routes/favorites')
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');
const authenticationMiddleware = require('./middleware/authentication')
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    // Other CORS options if needed
  }));
//routes
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/favorites',authenticationMiddleware,favoritesRouter)

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