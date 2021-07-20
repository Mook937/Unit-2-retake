var express = require('express');
var router = express.Router();
const fruitsCtrl = require('../controllers/fruits')

/* GET users listing. */
router.get('/', fruitsCtrl.index)
router.post('/', fruitsCtrl.create)
module.exports = router;
