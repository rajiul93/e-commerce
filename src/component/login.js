import React from "react";
import "./LoginSinUp.css";


function Login (){
    return (


    
<div className="login-container" >
<div className="login">
<h2>LOGIN</h2>

   <br/><br />
       <div className="input-container">
           <label htmlFor="">User Name</label><br />
           <input className="input" type="text" placeholder="Username/mail" /><br /><br />
           <label htmlFor="">Password</label><br />
           <input className="input" type="password" placeholder="Enter your password" />
           <input type="checkbox" /> <label className="remember" htmlFor="">remember</label>
       </div><br/>
       <button>SING IN</button>
   
   <br /><br />
       <div className="login-footer">
       <a href="#">Forget Password</a><br />
       <label className="input" htmlFor="">Do you have no account? <a href="">Sing Up</a></label>
       </div>
</div>
</div>

    )
}
export default Login;