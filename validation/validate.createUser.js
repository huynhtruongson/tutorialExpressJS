module.exports.validateUser = function(req,res,next) {
    let errs=[]
    if(!req.body.name)
        errs.push('Name is required')
    if(!req.body.age)
        errs.push('Age is required')
    if(errs.length >0) {
        res.render('create',{errs : errs,values : req.body})
    }
    next()
}