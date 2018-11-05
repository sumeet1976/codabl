import React, {Component} from 'react';
import './services.css';

import {serviceQuote, 
        softwareDevelopment, 
        mobility, 
        androidDevelopement, 
        cloudComputing, 
        technologies,
        languagesMobility,
        librariesMobility,
        frameworkMobility,
        graphqlMobility,
        clientTestimony,
        dataEngineeringCloud
        } from '../../utils/serviceUtils';

import ServiceQuote from './ServiceQuote/serviceQuote';
import SoftwareDevelopment from './SoftwareDevelopment/softwareDevelopment';
import  Mobility from './Mobility/mobility';
import Android from './Android/android';
import CloudComputing from './CloudComputing/cloudComputing';
import Technology from './TechnologyAgile/technologyAgile';
import Languages from './Languages/languages';
import ClientTestimonial from '../Home/ClientTestimonial/clientTestimonial';
import DataEngineering from './DataEngineering/dataEngineering'

class Services extends Component{

    render(){
         return(
             <div className = 'service-container'>
               
                <ServiceQuote  detail = {serviceQuote}/>

                
                <SoftwareDevelopment detail = {softwareDevelopment}/>
                <Languages  language = {languagesMobility} 
                            library = {librariesMobility}
                            framework ={frameworkMobility}
                            graphql = {graphqlMobility} />
                <Mobility detail = {mobility} android  = {androidDevelopement} /> 
                <CloudComputing detail = {cloudComputing}/>
                <Technology detail = {technologies}/>

                <DataEngineering detail = {dataEngineeringCloud} />

                <div style = {{marginTop:'80px'}}>
                    <div className = 'service-client-title'>Client Testimonials</div>
                    <div className = 'service-client-bluebox'></div>

                    <div style ={{marginTop:'40px'}}>
                        <ClientTestimonial  backgroundImageSlider = {clientTestimony.clientTestimonyImage} 
                              detailsClient = {clientTestimony.detailsClient}/>
                    </div>
                </div>

             </div>
         )
    }
}

export default Services