require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()

const userRouter = require('./routes/user')
const boardRouter = require('./routes/board')
const commendRouter = require('./routes/commend')

// setting ejs
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {

    res.render('login')
})

app.get('/signup', (req, res) => {

    res.render('signup')
})

// connected mongodb...
const connectDB = require('./config/database')
connectDB()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(morgan('dev'))

// connected uploads
app.use('/uploads', express.static('uploads'))
app.use('/scripts', express.static('scripts'))

// connected routes
app.use('/user', userRouter)
app.use('/board', boardRouter)
app.use('/commend', commendRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))