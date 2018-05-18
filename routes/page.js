let express = require('express');
let router = express.Router();
let Page = require("../models/page");

/* page example */
router.get('/',function(req,res,next){
    Page.find(function (err, results) {
        if (err) return console.error(err);
        console.log(results);
        res.render('index',{title : results[0].name})
    })
});
module.exports = router;