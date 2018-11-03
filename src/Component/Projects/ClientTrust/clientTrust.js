

import React from 'react';
import './clientTrust.css';


const ClientTrust = (props) =>{

    return(
        <div style ={{padding:'110px 75px 0px 84px', display:'flex'}}>
            
            <div style = {{ zIndex: "2", marginTop:'70px', marginRight:'-70px'}}>
                <div className = 'ct-content-div'> {props.clientTrustDetail.content}  </div>
            </div>

            <img src = {props.clientTrustDetail.image} style = {{width : "75%", height:'420px'}} />
        </div>
    )
}


export default ClientTrust