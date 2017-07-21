import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import Main from './pages/main';
import bestImages from './pages/bestImages';
import worstImages from './pages/worstImages';
import SignUp from './pages/signUp';
import Err from './pages/error';
import LogIn from './pages/logIn';

class Picogram extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/bestImages' component={bestImages} />
        <Route path='/worstImages' component={worstImages}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={LogIn}/>
        <Route path='/*' component={Err} />
      </Router>
    );
  }
}

export default Picogram;

// <Component name=Mikelis>
// Component ("Mikelis")
