import React from 'react';
import { Link } from 'react-router';
import Like from './like';

const styles = {
item: {
    margin: 0,
    border: 'none',
    marginTop: '20px',
  }
}

class Menu extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1497470888337-ded683b67494?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a35ab2ce791f01dcccf249c37906d42f" alt="unsplash" height="360" width="640"></img></li>
          <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/uploads/14130813513515ea083f9/563efd7a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=96fe68721d4a79bc077d63527bea0711" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1495935232962-ebf161e1a7f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=5afd1c21f6e162a676784063d731fa70" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1475477793686-225275e4c4d9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=bdd487d7201b92614858071eaf6eb739" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
      </ul>
      </div>
    );
  }
}

export default Menu;
