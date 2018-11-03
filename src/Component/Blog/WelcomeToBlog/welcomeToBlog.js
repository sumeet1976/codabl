

import React from 'react';

import './welcomeToBlog.css';

const WelcomeToBlog  = (props) =>{
    
    const styleBackground = {
        backgroundImage: "url(" + props.detail.background + ")" 
    }
  
    return(
        <div style = {styleBackground} className = 'wtb-container'>
               
               <div className = 'wtb-text wtb-title'>Welcome to our Blog</div>
               <div className = 'wtb-text wtb-content'>{props.detail.content}</div>

               <div className = 'wtb-text wtb-read-article'>Read article </div>
        </div>
    )

}

export default WelcomeToBlog;