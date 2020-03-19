// const db = require('../db.js')
const User = require('../models/user.model')
module.exports.requireLogin = async function(req,res,next) {
    if(!req.signedCookies.userId) {
        res.redirect('/login')
        return
    }
    var user = await User.findById({_id : req.signedCookies.userId})
    if(!user) {
        res.redirect('/login')
        return;
    }
    res.locals.user = user
    next()
}