let express = require('express');
let router = express.Router();
let Page = require("../models/page");


router.get('/create-page',function(req,res,next){
        res.render('admin/create-page',{title:"Create new page"});
});


module.exports = router;