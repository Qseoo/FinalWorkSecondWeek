import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class LogIn extends React.Component{
  render(){
    return(
      <div className="container">
    <div className="row">
		<div className="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="card card-block">
			<form className="form-horizontal" action=''>
			  <fieldset>
			    <div id="legend">
			      <legend className="">Login</legend>
			    </div>
			    <div className="control-group">
			      <label className="control-label" >E-mail Address</label>
			      <div className="form-group has-success">
                <input className="form-control input-lg" placeholder="E-mail Address" name="email" type="text"/>
            </div>
			    </div>
			    <div className="control-group">
			      <label className="control-label" >Password</label>
              <div className="form-group has-success">
                  <input className="form-control input-lg" placeholder="Password" name="password" type="password"/>
              </div>
			    </div>
			    <div className="control-group">
			      <div className="controls">
			        <a href="#"><button className="btn btn-success">Login</button></a>
			      </div>
			    </div>
			  </fieldset>
			</form>
		</div>
	</div>
</div>
</div>
    );
  }
}

export default LogIn;
