let express = require('express');
let router = express.Router();
let Page = require("../models/page");


router.get('/create-page', function (req, res, next) {
    res.render('admin/create-page', {title: "Create new page"});
});

router.get("/edit-page/:shortTitle",function(req,res,next){
    const shortTitle = req.params.shortTitle;
    Page.findOne({shortTitle:shortTitle},function(err,page){
        if(page === null){
            // TODO handle the case where the page doesn't exists
        }
        res.render("admin/edit-page",page);
    })
});
router.get('/page-list', function (req, res, next) {
    Page.find(function (err, pages) {
        if (pages.length === 0) {
            // TODO handle the case where the page doesn't exists
        }
        res.render("admin/page-list", {pages});
    });

});


module.exports = router;