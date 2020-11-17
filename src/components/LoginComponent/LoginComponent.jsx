import React, {useState} from 'react'



export default function LoginComponent() {
    const [input, setInput] = useState({email:"", password:""})
    return (
        
<form className="login-box">
    <div>
    <h1>Login</h1>
    </div>
  <div>
    
  <input 
  name="email" 
  type="email" 
  value =""
  placeholder="email"/>
  </div>
  <div>
  <input 
  name="password"
   type="password" 
   value=""
   placeholder="password"/>
  </div>
  <input type="button" className="btn" value="Sign in"/>
   </form>
       
        )
}
