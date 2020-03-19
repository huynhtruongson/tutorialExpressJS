// const db = require('../db')
const Product = require('../models/product.model')
module.exports.pagination = async function(req,res) {
    let products = await Product.find()
    let totalpage = Math.ceil(products.length / 4)
    let page = parseInt(req.query.page) || 1
    if(req.query.page > totalpage)
        page= totalpage
    if(req.query.page < 1)
        page=1
    let start = (page - 1) * 4
    let end = page*4
    let pageProducts = products.slice(start,end)
    res.locals.page = page
    res.locals.totalpage = totalpage
    // Product.find().then(function(products) {
    //     res.render('products',{products : products})
    // })
    res.render('products',{products : pageProducts})
}