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

class Best extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1490281127531-44704fa668fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a9fba6f220210389c32876864b4a668d" alt="unsplash" height="360" width="640"></img></li>
          <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=1ad8043d77d2fa7d44da7e4ad2e4ca0b" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1496288616618-ca5c8e34292e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f88f1c7c44f6231424adb4d4beb492d2" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1426443177319-df7c639993c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f0ad78836774f92477e0abdeed3b5a72" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
      </ul>
      </div>
    );
  }
}

export default Best;
