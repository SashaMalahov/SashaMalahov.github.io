var express = require('express');
var router = express.Router();
var blogConnector = require('../DAL/blogConnector.js');

router.get('/', function(req, res, next) {
	let blogDB = blogConnector.blogConnector;
	let Articles = blogDB.getArticleModel();

	Articles.find({}, function(err,data){		
		res.json(data);		
	})
});

router.post('/', function(req, res, next) {
	let blogDB = blogConnector.blogConnector;
	let Articles = blogDB.getArticleModel();

	let newArticle = new Article( { title : req.body.articleTitle, author : req.body.articleAuthor, body : req.body.articleBody, title : req.body.articleTitle, comments : req.body.articleComment});	
	newArticle.save(function(err){
		if (err){
			res.json({error : err.message});
		}
		else { 
			res.json({success : 'Article added'});
		}		
	})
});

module.exports = router;
