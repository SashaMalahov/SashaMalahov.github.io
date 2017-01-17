 class blogConnector{
	static getArticleModel(){
		let mongoose = require('mongoose'); 
		mongoose.Promise = global.Promise;		
		mongoose.connect('localhost/blog');	
		let Schema = mongoose.Schema;
		let articleSchema = new Schema({
		title : String,
		author : String,
		body : String,
		date : { type : Date, default : Date.Now},
		comments : [{ body : String, date : Date }]
		})	
		return mongoose.model('Article',articleSchema);
	}	
}

module.exports = { blogConnector };