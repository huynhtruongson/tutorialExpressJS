const express = require('express')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage : storage })
const controller = require('../controllers/user.controller')
const validate = require('../validation/validate.createUser')
const router = express.Router()

router.get('/',controller.index)
router.get('/search',controller.search)
router.get('/create/',controller.create)
router.get('/create/:userId',controller.update)
router.get('/:userId',controller.viewUser)
router.post('/create',upload.single('avatar'),controller.PostcreateUser)
router.get('/deleteUser/:userId',controller.deleteUser)


module.exports = router