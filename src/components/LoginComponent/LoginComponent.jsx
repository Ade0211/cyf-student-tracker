import React, {useState} from 'react'



export default function LoginComponent() {
    const [input, setInput] = useState({email:"", password:""})
    return (
        
<div className="login-box">
    <div>
    <h1>Login</h1>
    </div>
  <div>
      <label>Email</label>
  <input name="email" type="email" placeholder="email"/>
  </div>
  <div>
  <label>Password</label>
  <input name="password" type="password" placeholder="password"/>
  </div>
  <input type="button" className="btn" value="Sign in"/>

   </div>

       
        )
}
