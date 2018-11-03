

import React from 'react';
import './passionVision.css';

const PassionVision = (props) =>{
    
    return(
        <div className = 'passionVision-container'>

            {
                props.detail.map((item,j) =>
                 
                <div style = {{width:'26%'}}>
                    <div style = {{display:"flex", alignItems:"baseline"}}>
                        <div className = 'passionVision-commonText passionVision-title' >{item.title}</div>
                        <div className = 'passionVision-bluebox'></div>
                    </div>
                    <div className = 'passionVision-commonText passionVision-content'>{item.content}</div>
                </div>
                
            )
            }

        </div>
    )
}

export default PassionVision;