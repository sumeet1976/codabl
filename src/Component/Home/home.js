import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import CompanyTag from './CompanyTag/companyTag';
import SomeInsight from './SomeInsight/someInsight';
import UnlockPotential from './UnlockPotential/unlockPotential';
import RecentProjects from './RecentProjects/recentProjects';
import Services from './Services/services';
import ClientTestimonial from './ClientTestimonial/clientTestimonial';
import { companyTag , projects,detailsClient,servicesHomePage, someInsightContent,
        unlockPotentialContent, serviceTitleContent,recentProjectContent, clientTestimonyImage } from '../../utils/homePage';

import './home.css';

class Home extends Component{

    onClickingKnowMore =() =>{
          
        this.props.history.push('/services')
    }

    onClickAboutUs = () =>{
        this.props.history.push('/about')
    }
    
    onClickKnowMoreInsight = () =>{
        this.props.history.push('/about') 
    }
    
    onClickRecentProject = () =>{
        this.props.history.push('/projects') 
    }
    render(){
         return(
                <div>
                
                    <CompanyTag onClickAboutUs = {this.onClickAboutUs} companyTag = {companyTag}/>

                    <SomeInsight someInsightContent = {someInsightContent} onClickKnowMoreInsight ={this.onClickKnowMoreInsight}/>
                    
                    <UnlockPotential unlockPotentialContent = {unlockPotentialContent}/>
                    
                    <RecentProjects projects ={projects} onClickRecentProject ={this.onClickRecentProject} 
                    recentProjectContent = {recentProjectContent}/>
                    
                    <Services servicesHomePage = {servicesHomePage} onClickingKnowMore = {this.onClickingKnowMore}
                    serviceTitleContent = {serviceTitleContent}/>
                    
                    <ClientTestimonial detailsClient = {detailsClient} backgroundImageSlider = {clientTestimonyImage}/>
                    
              
              </div>
         )
    }
}

export default withRouter(Home)


  