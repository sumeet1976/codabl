
import React from 'react';
import './technologyAgile.css';

import CommonContentService from '../CommonContentService/commonContentService'
const TechnologyAgile = (props) =>{

    return(
        <div className = 'technology-container'>

            <div style ={{padding:'0px 0px 0px 60px', width :'60%'}}> 
                <CommonContentService detail = {props.detail} />
            </div>    

            <div style ={{width:'40%'}}>
                <img src = {props.detail.image} style = {{marginTop:'86px', width:'100%',
                                                          height:'340px'}} />
            </div>
        </div>
    )
}

export default TechnologyAgile;