const express = require('express')
const controller = require('../controllers/login.controller')
// const validate = require('../validation/validate.createUser')
const router = express.Router()
router.get('/',controller.login)
router.post('/',controller.postLogin)
module.exports = router