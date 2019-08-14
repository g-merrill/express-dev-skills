var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills index page. */
router.get('/', skillsCtrl.index);

/* GET individual skill show page. */
router.get('/:skill', skillsCtrl.show);

module.exports = router;
