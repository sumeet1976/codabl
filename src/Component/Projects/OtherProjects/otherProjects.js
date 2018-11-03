

import React from 'react';
import './otherProjects.css';


const OtherProjects = (props)  =>{
     
    return(
        <div className  = 'otherProjects-container'>
            <div className = 'otherProjects-common otherProjects-title'>Our other projects</div>
            <div className = 'otherProjects-common otherProjects-bluebox'></div>

            <div style = {{display:'flex', marginTop:"40px", paddingLeft:"30px", justifyContent:"space-between"}}>
            
                {
                    props.details.map((item,i) =>
                    
                    <div style = {{width:'31.5%'}}>
                        <img src = {item.image} style = {{width:"95%", height:"180px"}}  />
                        <div className = 'otherProjects-common otherProjects-project-title'>{item.title + "............"}  </div>
                        <div className = 'otherProjects-common otherProjects-content'>{item.content} </div>
                    </div>    
                
                    )
                }
            </div>
        </div>
    )
}

export default OtherProjects