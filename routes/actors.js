var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {


    var actorsDataFile = req.app.get('actorsData');
    var photosArray = [];
    actorsDataFile.actors.forEach(function (item) {
        photosArray = photosArray.concat(item.movies);
    });
    console.log(photosArray)
    res.render('actors',{movies:photosArray,actors:actorsDataFile});
    });


router.get('/:id', function (req, res) {
    var actorsDataFile = req.app.get('actorsData');
    var actor = actorsDataFile.actors[req.params.id];

    var photosArray = [];
    actorsDataFile.actors.forEach(function (item) {
        photosArray = photosArray.concat(item.movies);
    });
   console.log(req.params.id);
   console.log(actor);
        res.render('individualActor',{actors:actor,movies:photosArray});
});







module.exports  = router;