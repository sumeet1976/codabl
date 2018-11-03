


import React from 'react';
import './weAreCodabl.css';

const WeAreCodabl = (props) =>{

    const style = {

        backgroundImage: "url(" + props.detail.weAreCodableBackgroundImage + ")" 
    }
    
    return(
        <div style = {style} className = 'wac-container'>
            
            <div style = {{width:'40%'}}>
                <div style = {{display:"flex", alignItems:'baseline'}}>
                    <div className = 'wac-common wac-title'>{props.detail.title}</div>
                    <div className = 'wac-bluebox'></div>
                </div>

                <div className = 'wac-common wac-content'>{props.detail.content} </div>

                <div className = 'wac-common wac-getInTouch' onClick = {() => props.onClickGetInTouch()}>Get in touch</div>
            </div>
        </div>
    )
}

export default WeAreCodabl;