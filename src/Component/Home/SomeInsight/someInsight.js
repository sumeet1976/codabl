

import React from 'react';

import insightHome from '../../../images/home/insightHome.png';

import './someInsight.css';

const SomeInsight = (props) =>{
    
    return (
        <div style = {{backgroundColor:'#ffffff', display:'flex',
                       padding: '100px 90px 100px 116px', justifyContent:'space-between'}}>
            <img src = {insightHome} style = {{height:'100%', width:'50%'}} />
           
           
            <div className = 'someInsight-div'>
                <div className = 'someInsight-text someInsight-company'>Some insight about company</div>
                
                <div className = 'someInsight-blueBox'></div>
                
                <div className = 'someInsight-text someInsight-content'>              
                    {props.someInsightContent}
                </div>

                <div className = 'someInsight-text someInsight-knowMore' onClick = {props.onClickKnowMoreInsight}>Know more</div>
            </div> 
               
        </div>
    )
}

export default SomeInsight;