
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feedbackData = require('../data/feedback.json');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));
router.post('/', function ( req, res ) {
    feedbackData.unshift(req.body);// unshift to show the latest data only

    //saving the input form data into the feedback.json file
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf-8',function ( err ) {
        if(err){
            console.log(err);
        }
    });
    res.json(feedbackData);
    
});

router.delete('/:id', function ( req, res ) {
    feedbackData.splice(req.param.id, 1); // remove only one element

    //saving the input form data into the feedback.json file
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf-8',function ( err ) {
        if(err){
            console.log(err);
        }
    });
    res.json(feedbackData);

});

module.exports = router;