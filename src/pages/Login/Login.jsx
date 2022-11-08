import React from "react";
import { Link } from 'react-router-dom';
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello There</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            asperiores accusamus excepturi modi. 
          </p>
          <span>Don't have an account?</span>
          <Link to='/register'  > 
          <button>Register</button>
          
          </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="email" 
                 placeholder="abcd.com"
                />
                <input type="password" placeholder="Password" />

                <button type="submit" >Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
