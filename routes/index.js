var express = require('express');
var router = express.Router();
let Page = require("../models/page");


/* GET home page. */


router.get('/', function (req, res, next) {
    Page.find({}).sort({'createdAt': -1}).limit(3)
        .exec((err, pages)=>{
            var lastPage = pages;
            if(pages == null){
                lastPage = [];
            }
            Page.find({project:true}).sort({'createdAt': -1}).limit(3)
                .exec((err,projects)=>{
                    if(projects == null){
                        projects = [];
                    }
                    res.render('index', {lastPages : lastPage, projects : projects});
                });
        });
});

module.exports = router;
