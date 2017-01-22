var React = require("react")
var ReactDOM = require("react-dom");

class ArticleTextboxAreaComponent extends React.Component {
  render() {

  	let articleAreaItem = [];
  	for (let i = 0; i < this.props.areas.length; i++) {
  		articleAreaItem.push(<span key={i}>{this.props.areas[i]}: <input type="text" id="article{this.props.areas[i]}" size="50" /><p/></span>);
  	}
    return (<div>{articleAreaItem}</div>);
  }
}

module.exports = {ArticleTextboxAreaComponent};