  var React = require("react")
  var ReactDOM = require("react-dom");

  let constants = require('../constants.js');
	let user = require('./userFactory.js');
	require('../../styles/styles.css');
  let ArticlesComponent = require('../reactComponents/ArticleComponent.js');
  let WelcomeComponent = require('../reactComponents/WelcomeComponent.js');
  let ArticleTextboxAreaComponent = require('../reactComponents/ArticleTextboxAreaComponent.js');

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
     
     let articles = <ArticlesComponent.ArticlesComponent articles={data}/>;
     ReactDOM.render(articles,document.getElementById('newsSection'));
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

      renderWelcomeBanner(){                 
        let element = <WelcomeComponent.WelcomeComponent/>;
        ReactDOM.render(element,document.getElementById('welcomeBanner'));
      }

    renderArticleArea(){
      let articleArea = <ArticleTextboxAreaComponent.ArticleTextboxAreaComponent areas={['Title','Author','Body','Comment']}/>
      ReactDOM.render(articleArea,document.getElementById('addArticleArea'));
    }

	}

module.exports = News;





