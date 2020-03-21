
const User = require('../models/user.model')
module.exports.index = function(req,res) {
    User.find().then(function(users) {
        res.render('index',{users : users})
    })
}
module.exports.search = async function(req,res) {
    let q = req.query.name
    let users = await User.find()
    users = users.filter(x => {
        return x.name.toLowerCase().indexOf(q.toLowerCase()) >-1
    })
    res.render('index',{users : users})
}
module.exports.create = function(req,res) {
    res.render('create')
}
module.exports.update = async function(req,res) {
    let userId = req.params.userId
    let user = await User.findOne({_id : userId})
    res.render('create',{userId : userId,values : user})
}
module.exports.viewUser = async function(req,res) {
    let id = req.params.userId
    let user = await User.findById({_id : id})
    res.render('viewUser',{user : user})

}
module.exports.deleteUser = function(req,res) {
    let id = req.params.userId
    User.findOneAndRemove({_id : id},function(err) {
        if(err) {
            console.log(err)
        }
    })
    res.redirect('/user')
}
module.exports.PostcreateUser = function(req,res) {
    req.body.avatar ="/" + req.file.path.split('\\').slice(1).join('/')
    if(!req.body.userId) {
        if(req.body.name !=="" && req.body.age !== "") {
            let user = new User()
            user.name = req.body.name
            user.age = req.body.age
            user.avatar = req.body.avatar
            user.save()
        }
        res.redirect('/user')
    }
    else {
        let userId = req.body.userId
        User.findByIdAndUpdate({_id : userId},req.body,function(err){
            if(err)
                console.log(err)
        })
        res.redirect('/user')
    }
}
