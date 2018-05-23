let express = require('express');
let router = express.Router();
let Page = require("../models/page");

/* page example */
router.get('/:shortTitle', function (req, res, next) {
    const pageId = req.params.shortTitle;

    Page.findOne({shortTitle: pageId}, function (err, result) {
        if (result === null) {
            // TODO
        }
        res.render('page', result);

    })
});


router.get('/', function (req, res, next) {
    Page.findOne({shortTitle: 'default'}, function (err, result) {
        res.render('page', result);
    })
});

router.put('/:shortTitle', function (req, res, next) {
    const shortTitle = req.params.shortTitle;
    console.log(shortTitle)
    Page.findOne({shortTitle: shortTitle}, function (err, page) {
        if (err || !page) {
            // TODO handle the case where the page doesn't exist
            console.error("Error");
        }

        console.log(req.body);

        if (req.body.title) {
            page.title = req.body.title;
        }
        if (req.body.shortTitle) {
            page.shortTitle = req.body.shortTitle;
        }
        if (req.body.content) {
            page.content = req.body.content;
        }
        if (req.body.description) {
            page.description = req.body.description;
        }
        if (req.body.tags) {
            page.tags = req.body.tags;
        }
        if (req.body.imagePath) {
            page.imagePath = req.body.imagePath;
        }

        page.save(function (err) {
            if (err) {
                // TODO handle error
            }
            res.send({status: "OK"});
        })


    });
});

router.post('/', function (req, res, next) {

    let jsonPage = {};
    if (req.body.title) {
        jsonPage.title = req.body.title;
    }
    if (req.body.shortTitle) {
        jsonPage.shortTitle = req.body.shortTitle;
    }
    if (req.body.content) {
        jsonPage.content = req.body.content;
    }
    if (req.body.description) {
        jsonPage.description = req.body.description;
    }
    if (req.body.tags) {
        jsonPage.tags = req.body.tags;
    }
    if (req.body.imagePath) {
        jsonPage.imagePath = req.body.imagePath;
    }


    let p = new Page(jsonPage);
    p.save(function (err) {
        if (err) {
            // TODO handle error
        }
        res.send({status: "OK"});
    });

});

router.delete('/', function (req, res, next) {
    const shortTitle = req.body.shortTitle;
    Page.deleteOne({shortTitle: shortTitle},function(err){
        if(err){
            // TODO Handle error
        }
        res.send({status:"OK"});
    });
});


module.exports = router;