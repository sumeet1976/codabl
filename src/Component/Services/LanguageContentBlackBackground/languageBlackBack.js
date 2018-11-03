

import React from 'react';
import './languageBlackBack.css';


const LanguageBlackBack = (props) =>{
     

    return(
            <div className = 'lbb-container'>
                 
                    <div className  = 'lbb-div'>
                        <div style ={{display:'flex'}}>
                            
                            <div className = 'lbb-content'>{props.detail.contentLanguage}</div>
                            <div>
                                <div className = 'lbb-title'>{props.detail.title}</div>
                                <div className = 'lbb-title-bluebox'></div>
                            </div>

                        </div>
                    </div>

                    <div className = 'lbb-black-div' style ={{marginRight:props.detail.rightMargin}}>
                        
                        <div className = 'lbb-black-blackbox-left'></div>
                        
                        <div style = {{display: 'flex' , paddingBottom: '40px'}}>
                            {
                                props.detail.arrayContent.map((item,j) => 
                                
                                <div style ={{display:'flex'}}>

                                    <div key = {j} className = 'lbb-blackbox'>
                                        
                                        <div className = 'lbb-image-div'>
                                            <img src = {item.image} style ={{width:'20px', height:'20px'}} />
                                        </div>

                                        <div className = 'lbb-black-content'>{item.content}</div>
                                    </div>
                                    { j < props.detail.arrayContent.length-1 &&
                                        <div style ={{marginTop: '70px' ,
                                                  border: 'solid 0.5px #c9c9c94a'}}>
                                        </div>
                                    }

                                </div>
                            
                                )
                            }
                        </div>
                        <div style ={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                            <div className = 'lbb-black-blackbox-right'></div>
                        </div>                  
                    </div>    
                
            </div>
    )
}

export default LanguageBlackBack