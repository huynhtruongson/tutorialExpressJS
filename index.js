require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user.route')
const loginRoute = require('./routes/auth.route')
const productsRoute = require('./routes/products.route')
const requireLogin = require('./validation/validate.requireLogin')
const cartRoute = require('./routes/cart.route')
const productApiRoute = require('./api/routes/productapi.route')
const sessionMiddleware = require('./middlewares/session.middleware')
const cookieParser = require('cookie-parser')


mongoose.connect(process.env.MONGO_PATH)
const app = express()
app.use(cookieParser(process.env.cookieParser))
app.set('view engine','pug')
app.set('views','./views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000
app.use(sessionMiddleware)


app.get('/',(req,res) => {
    res.render('common')
    
})
app.use('/login',loginRoute)
app.use('/user',requireLogin.requireLogin,router)
app.use('/products',productsRoute)
app.use('/cart',cartRoute)
app.use('/api/products',productApiRoute)
app.use(express.static('public'))
app.listen(port,() => console.log(`Example app listening on port ${port}`))
