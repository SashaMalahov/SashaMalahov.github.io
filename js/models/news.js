	let constants = require('../constants.js');
	require('../../styles/styles.css');

	class News {

	 getNews(){	
	 	
		let request = new Request(constants.url,constants.init);
 				
 				fetch(request)
 				.then(response => response.json()) 			
 				.then ((data) => { 		
 					let newsSourceSelect = document.getElementById('newsSource');

 					data.sources.forEach( source => { 							

 					if(ShowArtcileLanguage){
 						console.log('Language of ' + source.id + ' articles is ' + source.language);
 					}

					let sourceName = source.id;
 					let element = document.createElement('option');
 					element.value = sourceName;
 					element.textContent = sourceName; 				
 					newsSourceSelect.appendChild(element); 				
 					});
 					})
 				.catch(err => console.log(err));
	}

	getNewsBySource(){ 		 			
 			let newsSourceSelect = document.getElementById('newsSource');
 			let selectedNewsSource = newsSourceSelect.options[newsSourceSelect.selectedIndex].value;
 			let request = new Request(constants.sourceUrl + selectedNewsSource, constants.init ); 		
			let html = '';

 			fetch(request)
 			.then(response => response.json())
 			.then ((data)=>{ 	
 				data.articles.forEach(article =>{
 			    let publishedDate = new Date(article.publishedAt).toLocaleDateString();
 				html += '<div class="news"><div class="newsTitle">' + article.title + '</div><div class="newsPublishedDate"> Published at: ' + publishedDate  + '</div><div class="newsPicture"><img src="'+ article.urlToImage+'"></div><div class="newsDescription"><a href="'+ article.url +'">' + article.description+'</a></div></div>';			        		    							
 			}) 			
 			document.getElementById('newsSection').innerHTML = html;
 			})
 			.catch((err) =>{ 				
 				document.getElementById('newsSection').innerHTML = "Ooops. Something wrong, try later.";
 			});
 		} 
	}

module.exports = News;



