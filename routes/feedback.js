
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // var actorsDataFile = req.app.get('actorsData');
    // var feedbackData = require('../data/feedback.json');
    res.render('feedback');
   // res.render('feedback',{feed:feedbackData,actors:actorsDataFile});
});

module.exports = router;