import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

const styles = {
item: {
    margin: 0,
    border: 'none',
    padding: '0 24px',
    height: '48px',
    lineHeight: '48px',
    fontSize: '30px',
    textDecoration: 'none',
    color: 'white',
  }
}

class Error extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header">
          <text style={styles.item}>You obviously need some guidance, young one</text>
        </header>
        <nav className="navigation">
        </nav>
        <main className="content">

      </main>
      </div>
    );
  }
}

export default Error;
