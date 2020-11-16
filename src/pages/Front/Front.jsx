import React from 'react';
import './front.scss';
import background from '../../assets/images/background.jpg';
import Login from '../Login/Login';


export default function Front() {
    return (
        <div className='front-page'>
           
            <img className='front-page__logo' src={background} alt="backgroundImage"/>
            <h1 className="front-page-title">CodeYourFuture Homework Tracking App</h1>
          
            <button className="front-page-button" component={Login} to="/Login">Login as a Teacher</button>
        </div>
    )
}
