var express = require('express');
var router = express.Router();
let Page = require("../models/page");

/* GET home page. */
router.get('/', function (req, res, next) {
    Page.find({})
        .sort({'createdAt': -1})
        .limit(3)
        .exec(function (err, pages) {
            var lastPage = pages;
            if(pages == null){
                lastPage = [];
            }
            res.render('index', {lastPages : lastPage});
        });
});

module.exports = router;
