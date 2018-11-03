
import React from 'react';
import './companyTag.css';

import wire from '../../../images/home/wire.png';
import wire2 from '../../../images/home/wire2.png';


const CompanyTag = (props) =>{

    return(
        <div style = {{backgroundColor:'#0f0a19' ,display:'flex', height:'536px', 
        width:'100%', justifyContent:'space-between'}}>
            
            <div className = 'companyTag-div'>
                <div className = 'companyTag-text companyTag-line' >{props.companyTag}
                </div>

                <div className = 'companyTag-text companyTag-aboutus' onClick ={props.onClickAboutUs}>ABOUT US</div>
                <img src = {wire2}  style ={{height :'200px', marginLeft:'80px'}} />
            </div>

            <img src = {wire}  style ={{width:'352px', height :'385px'}} />
     
        </div>
    )

}

export default CompanyTag