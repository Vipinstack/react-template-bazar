import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div class="search_main_section">
<div class="container">
<div class="row res_padd">


<div class="bread_crumb comm_btomm">
	<Link to="/">Home</Link>
    <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
    <Link to="#">Enquiry</Link>
</div>

<div class="main-center-div">
                  <div class="top-border-div">
                     <div class="login-from-area">
                        <h2>Sign In</h2>
                        <div>
                        <input type="text" class="login-type" placeholder="Email or mobile number" name="" />
                        <div class="clearfix"></div>
                        </div>
                        <div class="password-in">
                        <input id="password-field" type="password" class="login-type" name="password" placeholder="password" />
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <div class="remmber-area">
                           <label class="list_checkBox">Remember me
                           <input type="checkbox" name="text" />
                           <span class="list_checkmark"></span>
                           </label>
                           <Link to="forgot-passwords" href="#">Forgot Password?</Link>
                        </div>
                    <p>By clicking Sign In or continue with Facebook or Google, you agree to all <Link to=""> Terms of Service</Link> and <Link to="#"> Privacy Policy</Link></p>
                        <button type="submit" class="login-submit">Sign In</button>
                     </div>
                     <div class="or-area">
                        <span>Or Continue with</span>
                     </div>
                     <div class="login-socials-area">
                        <div class="socials-btns">
                           <Link to="#" class="common-btns facebook-btn">
                           <img src="./images/login-facebook.png" alt="" /> Facebook
                           </Link>
                           <Link to="#" class="common-btns google-btn">
                           <img src="./images/login-google.png" alt="" /> Google
                           </Link>
                        </div>
                        
                     </div>
                  </div>
                  <div class="bottom-account-div">
                     <p>Don't have an account? <Link to="/signup">Create Account</Link></p>
                  </div>
               </div>



  
</div>
</div>
</div>
    </div>
  );
}

export default Login;
