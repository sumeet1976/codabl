

import React from 'react';
import './languageWhiteBack.css';


const LanguageWhiteBack = (props) =>{
     

    return(
            <div className = 'lwb-container'>
                 
                    <div className  = 'lwb-div'>
                        <div style ={{display:'flex'}}>
                            <div>
                                <div className = 'lwb-title'>{props.detail.title}</div>
                                <div className = 'lwb-title-bluebox'></div>
                            </div>
                            <div className = 'lwb-content'>{props.detail.contentLanguage}</div>
                        </div>
                    </div>

                    <div className = 'lwb-white-div' style ={{marginLeft:props.detail.leftMargin}}>
                        
                        <div className = 'lwb-white-blackbox-left'></div>
                        
                        <div style = {{display: 'flex' , paddingBottom: '40px'}}>
                            {
                                props.detail.arrayContent.map((item,j) => 
                                
                                <div style ={{display:'flex'}}>

                                    <div key = {j} className = 'lwb-whitebox'>
                                        <img src = {item.image} style ={{width:'50px', height:'50px'}} />
                                        <div className = 'lwb-white-content'>{item.content}</div>
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
                            <div className = 'lwb-white-blackbox-right'></div>
                        </div>                  
                    </div>    
                
            </div>
    )
}

export default LanguageWhiteBack