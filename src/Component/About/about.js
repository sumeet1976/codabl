

import React, {Component} from 'react';
import './about.css';
import { withRouter } from "react-router-dom";

import MeetOurTeam from './MeetOurTeam/meetOurTeam';
import MessageFromTeam from './MessageFromTeam/messageFromTeam';
import PassionVision from './PassionVision/passionVision';
import WeAreCodabl from './WeAreCodabl/weAreCodabl';

import {codablAboutUs, passionVisionContent, meetTeamImage, sliderMessageImage, messageTeam} from '../../utils/aboutUtils';


class About extends Component{

    onClickGetInTouch =() =>{

        this.props.history.push('/contact')
    }

    render(){
         return(
             <div style ={{paddingBottom :'80px'}}>
                
                <WeAreCodabl detail = {codablAboutUs} onClickGetInTouch = {this.onClickGetInTouch} />
                
                <div style = {{padding:'0px 60px 0px 60px'}} >
                    <PassionVision detail = {passionVisionContent}  />
                </div>
                
                <MeetOurTeam  detail = {meetTeamImage} />
                <MessageFromTeam sliderMessageImage = {sliderMessageImage} messageTeam = {messageTeam}/>

             </div>
         )
    }
}

export default withRouter(About)