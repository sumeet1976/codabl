

import React from 'react';
import './mobility.css';

import CommonContentService from '../CommonContentService/commonContentService'


const Mobility = (props) =>{

    return(
        <div className = 'mobility-container'>
            
            <div className = 'mobility-title'>
                Mobile App: UX Design + UI Design + Development</div>
            <div className = 'mobility-bluebox'></div>

            <div style = {{marginTop:'100px', display:'flex', padding: '0px 0px 0px 20px'}}>

               <div style = {{height:'400px',}}>
                    <div className = 'mobility-left-div'></div>
                    
                    <div style = {{marginLeft: '80px',marginTop:'-90px', zIndex :'100'}}>
                    
                        <img src = {props.detail.image} style ={{width:'350px', height:'350px'}}/>
                    </div>
                    
                    <div style = {{marginTop: '-80px' , marginLeft: '380px'}}>
                        <div className = 'mobility-right-div'></div> 
                    </div>    

               </div>    
                
                <div style = {{marginLeft:'60px'}}>
                    <CommonContentService detail  ={props.detail} />
                </div>    

            </div>    

            <div style = {{marginTop:'80px', display:'flex',padding: '0px 20px 0px 0px'}}>
           
                <div style = {{marginLeft:'80px'}}>
                    <CommonContentService detail  ={props.android} />
                </div> 
                <div style = {{height:'400px',}}>
                   
                    <div className = 'android-left-div'></div>
                    
                    <div style = {{marginLeft: '100px',marginTop:'-90px', zIndex :'100'}}>
                    
                        <img src = {props.android.image} style ={{width:'350px', height:'350px'}}/>
                    </div>
                    
                    <div style = {{marginTop: '-100px' , marginLeft: '20px'}}>
                        <div className = 'android-right-div'></div> 
                    </div>    

                </div>    
            </div> 
        </div>
    )
}

export default Mobility;