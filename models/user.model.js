const mongoose = require('mongoose');
const userScheme = new mongoose.Schema({
    name : String,
    age : String,
    avatar : String,
    email : String,
    password : String
})

const User = mongoose.model('User',userScheme,'users')
module.exports = User