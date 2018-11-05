
import React from 'react';
import './dataEngineering.css';
import CommonContentService from '../CommonContentService/commonContentService'

const DataEngineering = (props) =>{

    return(
        <div style = {{marginTop:'80px', marginLeft:'60px', display:'flex', flexDirection:'row-reverse'}}>
        
        <div   style ={{width :'50%'}}> 
            <CommonContentService detail = {props.detail} />
        </div>    

    </div>
    )
}

export default DataEngineering;