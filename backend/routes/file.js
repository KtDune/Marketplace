
const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/controller.js')

router.post(ctrl.uploadFile)

module.exports = router