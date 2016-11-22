class News {
	
	 static getNews(){				
		let request = new Request(url,init);
 		
 				fetch(request)
 				.then(response => response.json()) 			
 				.then ((data) => { 		
 					let newsSourceSelect = document.getElementById('newsSource');

 					data.sources.forEach( source => { 							
					let sourceName = source.id;
 					let element = document.createElement('option');
 					element.value = sourceName;
 					element.textContent = sourceName; 				
 					newsSourceSelect.appendChild(element); 				
 					});
 					})
 				.catch(err => console.log(err));
	}

	static getNewsBySource(){ 		 			
 			let newsSourceSelect = document.getElementById('newsSource');
 			let selectedNewsSource = newsSourceSelect.options[newsSourceSelect.selectedIndex].value;
 			let request = new Request(sourceUrl + selectedNewsSource, init ); 		
			let html = '';

 			fetch(request)
 			.then(response => response.json())
 			.then ((data)=>{ 	
 				data.articles.forEach(article =>{
 				html += '<div class="row well"><div class="col-lg-12"><h3><em>' + article.title + '</em></h3></div><div class="col-lg-12"><img src="'+ article.urlToImage+'"></div><div class="col-lg-12"><a href="'+ article.url +'"><h4>' + article.description+'</h4></a></div></div>';			        		    							
 			}) 			
 			document.getElementById('news').innerHTML = html;
 			})
 			.catch((err) =>{ 				
 				document.getElementById('news').innerHTML = "Ooops. Something wrong, try later.";
 			});
 	} 
}


