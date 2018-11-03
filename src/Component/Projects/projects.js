import React, {Component} from 'react';
import './projects.css';

import ClientTrust from './ClientTrust/clientTrust';
import SuccessfulProjects from './SuccessfulProjects/successfulProjects';
import OtherProjects  from './OtherProjects/otherProjects';
import {clientTrustImage, successfulProjectsDetail,otherProjects} from '../../utils/workDetail'



class Projects extends Component{

    render(){
         return(
                <div>
                     
                    <ClientTrust  clientTrustDetail = {clientTrustImage}    />
                    <SuccessfulProjects details = {successfulProjectsDetail}  />
                    <OtherProjects details = {otherProjects}   />
                     
                </div>
         )
    }
}

export default Projects