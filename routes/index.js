var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var actorsDataFile = req.app.get('actorsData');



  // feedbackData.feedback.forEach(function (value) {
  //
  // })

    var photosArray = [];

    actorsDataFile.actors.forEach(function (item) {
        photosArray = photosArray.concat(item.movies);
    });
    res.render('index',{movies:photosArray, actors:actorsDataFile});
});

module.exports = router;
