

import React from 'react';

import {sponsersList} from '../../utils/sponsers';
import './footerSponsers.css';

const styleImage = (item) =>{
    
    console.log(item)
    switch(item){
        
        case '/static/media/amazon.912e021d.svg':
        return {
            width:'100px',
            height:'30px',
            marginTop:'8px'
        }

        case '/static/media/kickstar.74f4c9e8.svg':
        return {
            width:'140px',
            height:'30px',
        }
        
        case '/static/media/youtube.9871c0d3.svg':
        return {
            width:'90px',
            height:'30px',
        }

        default:
          return {
              width:'100px',
              height:'30px'
          }
    }
}

const FooterSponsers = (props) =>{

    return( <div>
                <div style = {{display:'flex', justifyContent:'space-between', padding:'40px 120px 20px 130px'}}>
                    
                    {sponsersList.map((item) =>
                    
                        <div key = {item}>
                            <img src = {item} style = {styleImage(item)} />
                        </div>
                    )}
                </div>
                
                <div className = 'footer-codable'>
                     <div className = 'footer-codable-title'>Codabl © 2018</div>
                </div>
            </div>    
    )
}

export default FooterSponsers;