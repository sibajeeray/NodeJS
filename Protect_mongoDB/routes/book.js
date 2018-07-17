var express = require('express');
var router = express.Router();
var bookModel = require('../models/bookModel');

/* GET users listing. */
router.get('/', function(req, res) {

    bookModel.find({}).exec((err, data)=>{
        if(err){console.log(err);res.render('err')}
        else
        res.render('book', {bookList : data});

    })

  
});

module.exports = router;
