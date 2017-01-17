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
    $.get(constants.usersUrl, function(data){      
      require.ensure([],function(require){
        const newsCss = require('../../styles/news.css');
      });
     let newsSourceSelect = document.getElementById('newsSource');
     let html = '';

     $.each(data, function(i, article) {
        html += '<div class="news"><div class="newsTitle">' + article.title + '</div><div class="newsPublishedDate"> Author: ' + article.author  + '</div><div class="newsDescription">' + article.body +'</div></div>';             
    })

    document.getElementById('newsSection').innerHTML = html;
    })

	}
 	 addArticle(){
        let articleTitle = $('#articleTitle').val();
        let articleAuthor = $('#articleAuthor').val();
        let articleBody = $('#articleBody').val();
        let articleComment = $('#articleComment').val();

        let article = { articleTitle : articleTitle, articleAuthor : articleAuthor, articleBody : articleBody, articleComment : [{ commentBody :articleComment }]}

        $.ajax({
          url : constants.usersUrl,
          type : 'POST',
          success : function(data){
              console.log('article added');
          },
          error : function(data){
              console.log('error');
          },
          contentType: "application/json",
          data : JSON.stringify(article)
        });
    }
	}

module.exports = News;



