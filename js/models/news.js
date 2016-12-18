	let constants = require('../constants.js');
	let user = require('./userFactory.js');
	require('../../styles/styles.css');

	class News {

	constructor(){
			this.observers = [];
	}

	attachObserver(observer){
		this.observers.push(observer);		
	}

	dettachObserver(observer){
		 for(let i in this.observers)
            if(this.observers[i] === observer)
                this.observers.splice(i, 1)
	}


	notifyObserver(sportNewsInfo){		
 		this.observers.forEach(observer => {
 				observer.Update(sportNewsInfo);
 		});
	}

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

 					if(source.category === 'technology'){

 						if(source.language === 'en'){
 							let englishUser = new user.EnglishUser();
 							let englishTechnologyUser = englishUser.Create('Alex',this);
 							this.notifyObserver(source.description)	
 						}
 						else if (source.language === 'de'){
 							let germanUser = new user.GermanUser();
 							let germanTechnologyUser = germanUser.Create('Gans',this);	
 							this.notifyObserver(source.description)	
 						} 						
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

			require.ensure([],function(require){
				const newsCss = require('../../styles/news.css');
			});

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



