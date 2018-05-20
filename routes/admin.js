let express = require('express');
let router = express.Router();
let Page = require("../models/page");


router.get('/create-page', function (req, res, next) {
    res.render('admin/create-page', {title: "Create new page"});
});
router.get('/page-list', function (req, res, next) {
    Page.find(function (err, results) {
        if (result.length === 0) {
            // TODO handle the case where the page doesn't exist
        }


        res.render("admin/page-list", {pages});

    });

});


module.exports = router;