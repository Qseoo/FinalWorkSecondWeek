import React from 'react';

class Logo extends React.Component{
  render(){
    return(
      <div>
        <h1 className="picogram-logo">Work is being done here by {this.props.name}</h1>
      </div>
    );
  }
}

export default Logo;
