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
			let html = '<table  border="1|1">';

 			fetch(request)
 			.then(response => response.json())
 			.then ((data)=>{ 	
 				data.articles.forEach(article =>{				

        		html+='<tr>';
        		html+='<td>'+ article.title +'</td>';
        		html+='<td>'+ article.description+'</td>';
        		html+='<td>'+ article.url+'</td>';        	
        		html+='</tr>';			
    							
 			})
 			html+='</table>';
 			document.getElementById('news').innerHTML = html;
 			})
 			.catch((err) =>{ 				
 				document.getElementById('news').innerHTML = "Ooops. Something wrong, try later.";
 			});
 	} 
}


