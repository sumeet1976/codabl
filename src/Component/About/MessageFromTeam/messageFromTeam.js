

import React from 'react';
import './messageFromTeam.css';

import TeamMessageSlider  from '../../Home/ClientTestimonial/clientTestimonial';

const MessageFromTeam = (props) =>{
    
    return(
        <div className = 'mft-container'>

            <div className = 'mft-title'>Message from team members </div>
            <div className = 'mft-bluebox'></div>
            <div style = {{marginTop:'40px'}}>
                <TeamMessageSlider  backgroundImageSlider = {props.sliderMessageImage} 
                             detailsClient = {props.messageTeam}/>
            </div>

        </div>
    )
}

export default MessageFromTeam;