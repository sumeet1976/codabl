

import React from 'react';
import './cloudComputing.css';
import CommonContentService from '../CommonContentService/commonContentService'

const CloudComputing = (props) =>{

    return(
        <div className = 'cloud-container'>
        
        <div style ={{width :'45%'}}>
            <img src = {props.detail.image} style = {{ width :'100%', marginTop:'10px',
                                                      height:'430px'}} />
        </div>

        <div   style ={{width :'50%'}}> 
            <CommonContentService detail = {props.detail} />
        </div>    

        
    </div>
    )
}

export default CloudComputing;