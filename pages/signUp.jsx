import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';


class SignUp extends React.Component{
  render(){
    return(
<div>
        <div className="container">
    <div className="row">
        <div className="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <div className="card card-block">
                    <h3 className="text-xs-center">Sign Up!</h3>
                    <fieldset>
                        <div className="form-group has-success">
                            <input className="form-control input-lg" placeholder="E-mail Address" name="email" type="text"/>
                        </div>
                        <div className="form-group has-success">
                            <input className="form-control input-lg" placeholder="Password" name="password" type="password"/>
                        </div>
                        <div className="form-group has-success">
                            <input className="form-control input-lg" placeholder="Confirm Password" name="password" type="password"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control input-lg">
                                <option>Security Question</option>
                                <option>What was the name of your first pet?</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control input-lg" placeholder="Security Answer" name="answer" type="text"/>
                        </div>
                        <div className="checkbox">
                            <label className="small">
                                <input name="terms" type="checkbox"/>I have read and agree to the <a href="#">terms of service</a>
                            </label>
                        </div>

                    </fieldset>
                    <input className="btn btn-lg btn-primary btn-block" value="Sign Me Up!" type="submit" disabled="true"/>
                </div>
        </div>
    </div>
</div>
</div>
    );
  }
}


export default SignUp;
