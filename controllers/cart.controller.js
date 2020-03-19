const db = require("../db")

module.exports.addToCart = function(req,res) {
    let sessionId = req.signedCookies.sessionId
    let productId = req.params.productId

    db.get('sessions').find({id : sessionId})
    .set('cart',{}).write()

    var count = db.get('sessions').find({id : sessionId}).
    get('cart.' + productId,0).value()

    db.get('sessions').find({id : sessionId})
    .set('cart.'+productId,count+1).write()
    res.redirect('/products')
}