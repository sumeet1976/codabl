

import React from 'react';
import './softwareDevelopment.css';

import CommonContentService from '../CommonContentService/commonContentService'

const SoftwareDevelopment = (props) =>{

    return(
        <div className = 'sd-container'>
            
            <div style = {{width:'50%'}}  >
                <img src = {props.detail.image} style = {{marginTop:'10px',  width:'100%', 
                height:'450px'}}/>
            </div>

            <div style = {{width:'45%'}}>    
                <CommonContentService detail = {props.detail} />
            </div>

        </div>
    )
}

export default SoftwareDevelopment;