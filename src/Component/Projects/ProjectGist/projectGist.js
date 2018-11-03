

import React from 'react';
import './projectGist.css'


const ProjectGist = (props) =>{
   
    return(
        <div style = {{width:'29%', paddingRight:'10%'}}>
            
            <div style ={{height : '270px', overflow:'hidden'}}>

                <div className = 'projectGist-commonText projectGist-title'>{props.details.title}</div>
                <div className = 'projectGist-commonText projectGist-bluebox'></div>

                <div className = 'projectGist-commonText projectGist-content'>{props.details.content}</div>
            </div>

            <div className = 'projectGist-commonText projectGist-readmore'>Read more..</div>
        </div>
    )
}

export default ProjectGist;