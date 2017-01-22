var React = require("react")
var ReactDOM = require("react-dom");

class ArticlesComponent extends React.Component{
	render(){
		let articles = [];		
		for (let i = 0; i < this.props.articles.length; i++) {
  			articles.push(<div className='news' key= {i}><div className='newsTitle'> {this.props.articles[i].title} </div><div className="newsPublishedDate"> Author: {this.props.articles[i].author} </div><div className="newsDescription"> {this.props.articles[i].body} </div></div>);
		}
		return (<div> {articles}</div>);
	}
}

module.exports =  {ArticlesComponent};