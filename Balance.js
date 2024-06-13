const express = require('express')
const router = express.Router()

const {getwallet,updatewalletbalance} = require('../CONTROLLERS/Balance')

router.route('/Balance').get(getwallet)


router.route('/Balance').put(updatewalletbalance)

module.exports = router