import React from 'react';
import { Link } from 'react-router';

const styles = {
item: {
    margin: 0,
    border: 'none',
    padding: '0 24px',
    height: '48px',
    lineHeight: '48px',
    textDecoration: 'none',
    color: 'black',
  }
}

class Icon extends React.Component{
  render(){
    return(
      <div>
        <p>
        <Link to="/"><i className="fa fa-home fa-3x" style={styles.item}></i></Link>
        <Link to="/about"><i className="fa fa-gamepad fa-3x" style={styles.item}></i></Link>
        <Link to="/404"><i className="fa fa-bicycle fa-3x" style={styles.item}></i></Link>
      </p>
      </div>
    );
  }
}

export default Icon;
