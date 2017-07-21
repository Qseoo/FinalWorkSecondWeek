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

class Worst extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1469730268873-dc89e712948a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fab64eae176f66a6fb7cf3d9eed00679" alt="unsplash" height="360" width="640"></img></li>
          <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1497730026262-2f272ffa022b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=259a814105b91f28898e3b5af3197df8" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1490117564275-5bac616dbeb1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=bd7dc76c711a2c56d09bb8a626fdd158" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
        <li style={styles.item}><img className="image homeimage" src="https://images.unsplash.com/photo-1429902902560-fe08a2b1b780?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=de58a99c6297ae8856d1c49e6600c48c" alt="unsplash" height="360" width="640"></img></li>
        <Like/>
      </ul>
      </div>
    );
  }
}

export default Worst;
