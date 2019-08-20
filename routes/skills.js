var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET skills index page. */
router.get('/', skillsCtrl.index);
/* GET skills new page. */
router.get('/new', skillsCtrl.new);
/* GET individual skill show page. */
router.get('/:skill', skillsCtrl.show);
/* POST individual skill */
router.post('/', skillsCtrl.create);

router.delete('/:skill', skillsCtrl.delete);

module.exports = router;
