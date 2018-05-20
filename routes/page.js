let express = require('express');
let router = express.Router();
let Page = require("../models/page");

/* page example */
router.get('/:id', function (req, res, next) {
    const pageId = req.params.id;

    Page.findOne({title: pageId}, function (err, result) {
        if (result === null) {
            // TODO handle the case where the page doesn't exist
        }
        res.render('page', result);

    })
});

router.get('/', function (req, res, next) {
    Page.findOne({title: 'Default'}, function (err, result) {
        res.render('page', result);
    })
});

router.post('/', function (req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    let p = new Page({title,content});
    p.save(function (err) {
        if (err) {
            // TODO handle error
        }
       res.send({status:"OK"});
    });

});




module.exports = router;