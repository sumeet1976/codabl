

import React  from 'react';
import './projectOddOne.css';

import ProjectGist from '../ProjectGist/projectGist';
import ProjectBenefits from '../ProjectBenefits/projectBenefits';


const ProjectOddOne  = (props) =>{
  
    return(
        
            <div style = {{marginTop : '100px'}}>

                <div style = {{display:'flex', justifyContent:'space-between', paddingLeft:"50px"}}> 
                    <ProjectGist  details = {props.details} />
                    <img src = {props.details.image} style = {{width:'50%', height:'400px'}}  />
                </div>

                <div style = {{padding:'0px 60px 0px 60px'}}> 
                    <ProjectBenefits details = {props.details} /> 
                </div>

            </div>
    )
}

export default ProjectOddOne;