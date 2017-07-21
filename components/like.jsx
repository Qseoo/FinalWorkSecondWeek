import React from 'react';

class Like extends React.Component{
  constructor(){
    super();

    this.state = {
      likes: 0,
      value:'',

    };
  }
addLike() {
  this.setState({likes: this.state.likes + 1})
}
removeLike() {
  this.setState({likes: this.state.likes - 1 })
}
  render(){
    return(
      <div className="btn-group" role="group" aria-label="...">
        <label type="label" className="btn btn-default" disabled="true">{this.state.likes}</label>
        <button type="button" className="btn btn-default" onClick={this.addLike.bind(this)}>Upvote</button>
        <button type="button" className="btn btn-default" onClick={this.removeLike.bind(this)}>Downvote</button>

      </div>
  );
  }
}

export default Like;
