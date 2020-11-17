  import React, {useState} from 'react';
  import './logincomponent.scss';

  export default function LoginComponent() {
      const [userName, setUserName] = useState("");
      const [password, setPassword] = useState("");

      const validateForm =()=> {
        return userName.length > 0 && password.length > 0;
      }
      const handleSubmit =(event) => {
        event.preventDefault();
          // validateForm();
     let information ={

       userName:userName,
       password:password
     }
     const requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(information)
      
      }
      fetch("https://stingy-cherry-sight.glitch.me/login", requestOptions)
      .then(data => data.json())
      .then(data => console.log(data));
      setUserName("");
      setPassword("");
    }

      return (
      
  <div className="login-page">
  <form className="login-box" onSubmit={handleSubmit} >
      <div>
      <h1>Log In</h1>
      </div>
    <div  className="text-box">  
    <input
    name="userName" 
    type="text" 
    value ={userName}
    placeholder="username"
    onChange={(e)=> setUserName(e.target.value)}/>
    </div>
    <div className="text-box">
    <input 
    name="password"
    type="password" 
    value={password}
    placeholder="Password"
    onChange={(e)=> setPassword(e.target.value)}/>
    </div>
    <div className="buttons" >
    <input type="submit" className="login-box-btn" value="Log In" />
    </div>
    </form>
  <footer className="page-footer">
    <div className="footer-copyright-text">Copyright 2020 CodeYourFuture
    </div>
  </footer>
    
    </div>
        
          )
  }
