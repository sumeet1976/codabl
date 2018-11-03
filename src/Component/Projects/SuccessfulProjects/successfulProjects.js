
import React from 'react';
import './successfulProjects.css';

import ProjectEven from '../ProjectEvenOne/projectEvenOne';
import ProjectOdd from '../ProjectOddOne/projectOddOne';


const SuccessfulProjects = (props) =>{
   
    return(
        <div>
            {
                props.details.map((item, i) =>
                    <div key = {i}> 
                        {i%2  === 0  ? 
                            <ProjectEven details = {item} />
                            :
                            <ProjectOdd details = {item} />
                        }
                    </div>
                )
            }
        </div>
    )
}

export  default SuccessfulProjects