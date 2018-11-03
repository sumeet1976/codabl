

import React from 'react';
import './commonContentService.css';

const CommonContentService = (props) =>{
    
    return(

        <div className = 'ccs-container'>
            <div className = 'ccs-text ccs-title'>{props.detail.title}</div>
            <div className = 'ccs-bluebox' style = {{width:props.detail.widthBlueBox}}></div>
            <div className = 'ccs-text ccs-content' style = {{width: props.detail.widthContent}}>
               {
                   props.detail.content.map((item,i) =>
                    
                    <div  key = {i} style = {i>0 ? {marginTop:'10px'} : {marginTop:'0px'}} >
                        {item}
                    </div>
                   
                )
               } 
            </div>
        </div>    
    )
}

export default CommonContentService;