const Product = require('../../models/product.model')
module.exports.pagination = async function(req,res,next) {
    try {
      let products = await Product.find()
      // products.foo()
      res.json(products)
    } catch(err) {
      next(err)
    }
    
}
module.exports.create = async function(req,res) {
  let product = await Product.create(req.body)
  res.json(product)
}