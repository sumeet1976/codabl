

import React from 'react';
import './meetOurTeam.css';

const MeetOurTeam = (props) =>{
    
    return(
        <div className = 'mot-container'>
            
            <div style = {{display:'flex', alignItems:'baseline', justifyContent:'center'}}>
                <div className = 'mot-bluebox'></div>
                <div className = 'mot-title'>Meet Our Team</div>
                <div className = 'mot-bluebox'></div>
            </div>

            <div className = "mot-image-div">
                {
                    props.detail.map((item,i) =>
                    
                        <div style = {{width:"20%", marginLeft:'50px', marginTop:'40px'}}>
                            <img src = {item.image} style = {{width:"100%", height:'190px'}}  />
                            <div className = 'mot-name'>{item.name} </div>
                            <div className = 'mot-designation'>{item.designation}</div>
                        </div>    
                    )
                }
            </div>    

        </div>
    )
}

export default MeetOurTeam;