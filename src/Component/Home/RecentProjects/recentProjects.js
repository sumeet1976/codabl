

import React from 'react';

import recentProjects from '../../../images/home/recentProjects.png';
import  './recentProjects.css';

const titleStyle ={
    backgroundImage: "url(" + recentProjects + ")" 
}

const RecentProjects = (props) =>{

    return(
          
            <div className = 'rp-div'>
                
                <div style ={{display:'flex', justifyContent:'space-between'}}>
                    <div className = 'rp-title' style = {titleStyle}>
                        <div className = ' rp-common-text rp-title-text'>Recent Projects</div>
                        <div style ={{display:'flex', justifyContent:"center"}}>
                            <div className = 'rp-title-whitebox'> </div>
                        </div>
                    </div>

                    <div className = 'rp-common-text rp-title-content'>
                        {props.recentProjectContent}
                    </div>
                </div> 
                
                <div className = 'rp-projects-div'>
                    {props.projects.map((item,i) =>
                        <div key ={i} style= {{width:'30%', cursor:'pointer'}} onClick = {() =>props.onClickRecentProject()}>
                            <img src ={item.image}  style ={{width:'100%'}}  />
                            <div className = 'rp-client-detail'>
                                
                                <div className ='rp-client-bluebox'>
                                </div>

                                <div style ={{marginLeft:'8px'}}>
                                    <div className ='rp-common-text rp-client-projectTitle'>{item.projectTitle}</div>
                                    <div className ='rp-common-text rp-client-title'>{"Client" +" " + ":" +" " + item.client}</div>
                                </div>    
                            </div>
                        </div>
                    
                    )}
                    
                </div>    

            </div>    
    )

}

export default RecentProjects;