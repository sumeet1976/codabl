

import React from 'react';
import './projectBenefits.css'


const ProjectBenefits = (props) =>{
   
    return(
        <div className = 'projectBenefits-container'>
            
            {
                props.details.benefits.map((item,j) =>
                 
                <div style = {{width:'25%'}}>
                    <div style = {{display:"flex", alignItems:"center"}}>
                        <div className = 'projectBenefits-commonText projectBenefits-title' >{item.title}</div>
                        <div className = 'projectBenefits-bluebox'></div>
                    </div>
                    <div className = 'projectBenefits-commonText projectBenefits-content'>{item.content}</div>
                </div>
                
            )
            }
        </div>
    )
}

export default ProjectBenefits;