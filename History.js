const express = require('express')
const router = express.Router()

const {showBooking}= require('../CONTROLLERS/History')

router.route('/History').get(showBooking)

module.exports = router