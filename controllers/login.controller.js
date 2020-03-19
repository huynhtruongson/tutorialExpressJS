// const db = require("../db")
const User = require('../models/user.model')
module.exports.login = function(req,res) {
    res.render('login')
}
module.exports.postLogin = async function(req,res) {
    let email = req.body.email
    let password = req.body.pwd
    let user = await User.findOne({email : email})
    if(!user) {
        res.render('login',{errs : "Email không tồn tại",values : req.body})
        return;
    }
    if(password !== user.password) {
        res.render('login',{errs : "Wrong password",values : req.body})
        return;
    }
    else {
        res.cookie('userId',user.id,{signed : true})
        res.redirect('/user')
    }
}