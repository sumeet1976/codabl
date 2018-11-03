

import React from 'react';

import './languages.css';

import LanguageWhiteBack from '../LanguageContentWhiteBackground/languageWhiteBack';
import LanguageBlackBack from '../LanguageContentBlackBackground/languageBlackBack';

const Languages = (props) =>{
 
    return(
        <div className  ='language-container'>
            <div className = 'language-title'>
            Technologies that are 
            preferred by start-ups for application 
            building and <span style = {{color: '#4717f5'}}>we are master in following…. </span>
            </div>

            <LanguageWhiteBack detail  ={props.language} />
            <LanguageBlackBack detail = {props.library}/>
            <LanguageWhiteBack detail = {props.framework} />
            <LanguageBlackBack detail = {props.graphql} />
        </div>
    )

}

export default Languages;