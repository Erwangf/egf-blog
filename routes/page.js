let express = require('express');
let router = express.Router();
let Page = require("../models/page");

/* page example */
router.get('/',function(req,res,next){
    Page.find(function (err, results) {
        res.render('page',results[0])
    })
});
module.exports = router;