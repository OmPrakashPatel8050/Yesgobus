const express = require('express')
const router = express.Router()

const {getallvehicles,getvehiclebyname,} = require('../CONTROLLERS/vehicle')

router.route('/vehicle').get(getallvehicles)

router.route('/vehicles/:name').get(getvehiclebyname)



module.exports = router

