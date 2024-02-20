const express = require('express')
const router = express.Router()

const { sendEmail } = require('../controllers/sendmail')

router.route('/sendmail').post(sendEmail)

module.exports = router