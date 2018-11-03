

import React  from 'react';
import './projectEvenOne.css';

import ProjectGist from '../ProjectGist/projectGist';
import ProjectBenefits from '../ProjectBenefits/projectBenefits';
import Projects from '../projects';

const ProjectEvenOne  = (props) =>{
  
    return(
            <div style = {{marginTop:'100px'}}>

                <div style = {{display:'flex', justifyContent:'space-between',paddingRight:'50px'}}> 
                    <img src = {props.details.image} style = {{width:'50%', height:'365px'}}  />
                    <ProjectGist  details = {props.details}/>
                </div>
                
                <div style = {{padding:"0px 60px 0px 60px"}}>
                    <ProjectBenefits  details = {props.details} /> 
                </div>

            </div>
    )
}

export default ProjectEvenOne;