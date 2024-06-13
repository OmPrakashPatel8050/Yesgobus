const express = require('express')
const router = express.Router()

const {getalloffers,createanoffer} = require('../CONTROLLERS/Offer')

router.route('/Offer').get(getalloffers)

router.route('/Offer').post(createanoffer)

module.exports = router