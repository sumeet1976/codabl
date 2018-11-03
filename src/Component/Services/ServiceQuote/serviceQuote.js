
import React from 'react';
import './serviceQuote.css';

import CommonContentService from '../CommonContentService/commonContentService'

const ServiceQuote = (props) =>{

    

    return(
        <div className = 'sq-container'>
            <div style = {{width:'35%', paddingTop:'185px'}}>
                <CommonContentService detail = {props.detail} />
            </div>

            <div style = {{width:'570px'}}>
                <div className = 'sq-circle-div' 
                    style = {{backgroundImage: "url(" + props.detail.backgroundImage + ")" }}>
                    
                    <img src = {props.detail.serviceQuoteImage} style = {{width:'180px', marginTop:'-120px', marginRight:'5px'}} />
                </div>
            </div>

        </div>
    )
}

export default ServiceQuote;