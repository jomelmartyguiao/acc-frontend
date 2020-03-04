import React from 'react';
import logo from '../../assets/images/logo-acc.png';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <img src={logo} alt="logo" className="img-logo" />
        <form>
          <p className="acc-form-title">WELCOME</p>
          <div className="acc-form-group">
            <span className="acc-pre-add-on"><i className="fa fa-user"></i></span>		
            <input type="text" name="username" placeholder="Username" className="acc-input-form" />
          </div>
          <div className="acc-form-group">
            <span className="acc-pre-add-on"><i className="fa fa-lock"></i></span>		
            <input type="password" name="username" placeholder="Password" className="acc-input-form" />
          </div>
          <input type="submit" name="inputSubmit" className="acc-btn acc-btn-login transition" />
          <span className="forgot-text">Forgot password?</span>
          <p className="copyright">&copy; 2020 ACC. All rights reserved.</p>
        </form>
      </div>
    </div>
  )
}
export default Login;