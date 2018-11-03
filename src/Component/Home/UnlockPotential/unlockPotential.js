import React from 'react';

import unlockPotential from '../../../images/home/unlockPotential.png';

import './unlockPotential.css';

const style ={
    backgroundImage: "url(" + unlockPotential + ")" 
}

const UnlockPotential = (props) =>{
  
    return(
            <div style = {style} className = 'unlock-div'>
               
                <div style = {{display :"flex", justifyContent:'flex-end'}}>
                    <div className = 'unlock-content'>
                       {props.unlockPotentialContent}
                    </div>
                </div>
              
                <div className = 'unlock-title'>Unlock business potential with us</div>
                <div className = 'unlock-whiteBox'></div>
            </div>
    )

}

export default UnlockPotential;