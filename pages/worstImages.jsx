import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';
import Worst from '../components/worst';


class worstImages extends React.Component{
  render(){
    return(
      <div className="container">
        <Worst/>
      </div>
    );
  }
}

export default worstImages;
