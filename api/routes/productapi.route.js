const express = require('express')
const router = express.Router()
const controller = require('../controllers/productapi.controller')
router.get('/',controller.pagination)
router.post('/',controller.create)
module.exports = router