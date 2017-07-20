import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/404">Error</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
