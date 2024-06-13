const express = require('express')
const router = express.Router()

const {getCabBookings,CreateCabBookings} = require('../CONTROLLERS/CabBook')

router.route('/CabBook').get(getCabBookings)

router.route('/CabBook').post(CreateCabBookings)

module.exports = router