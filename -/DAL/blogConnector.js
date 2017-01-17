 class blogConnector{
	static getArticleModel(){
		let mongoose = require('mongoose'); 
		mongoose.Promise = global.Promise;		
		if(mongoose.Connection.STATES.connected !== mongoose.connection.readyState){
			mongoose.connect('localhost/blog');
			let Schema = mongoose.Schema;
			var articleSchema = new Schema({
			title : String,
			author : String,
			body : String,
			date : { type : Date, default : Date.Now},
			comments : [{ body : String, date : Date }]
		})			
		}		
		
		return mongoose.model('Article',articleSchema);
	}	
}

module.exports = { blogConnector };