import React from 'react';
import { connect } from 'react-redux';
import history from '../Shared/history';

import * as actions from '../../actions';
import logo from '../../assets/images/logo-acc.png';

const Login = () => {

  const handleSubmit = () => {
    // e.preventDefault()
    // this.props.login();
    localStorage.setItem('access_token', 'sampletoken')
    history.push('/dashboard')
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <img src={logo} alt="logo" className="img-logo" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <p className="acc-form-title">WELCOME</p>
          <div className="acc-form-group">
            <span className="acc-pre-add-on"><i className="fa fa-user"></i></span>		
            <input type="text" name="username" placeholder="Username" className="acc-input-form" />
          </div>
          <div className="acc-form-group">
            <span className="acc-pre-add-on"><i className="fa fa-lock"></i></span>		
            <input type="password" name="username" placeholder="Password" className="acc-input-form" />
          </div>
          <button className="acc-btn acc-btn-login transition" onClick={handleSubmit}>Login</button>
          <span className="forgot-text">Forgot password?</span>
          <p className="copyright">&copy; 2020 ACC. All rights reserved.</p>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = {
  login: actions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);