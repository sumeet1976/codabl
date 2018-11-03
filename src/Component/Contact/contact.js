import React, {Component} from 'react';
import './contact.css';

import contactLocation from '../../images/contactLocation.png'



class Contact extends Component{

    render(){
         return(
                <div className = 'contact-container'>

                    <div style = {{display:'flex', padding:'0px 0px 0px 60px'}}>
                        <div style = {{width:'50%'}}>
                            <div className = 'contact-haveProject'>Have a project in mind? </div>
                            <div className = 'contact-haveProject'>Lets talk…</div>
                            <div className = 'contact-bluebox'></div>
                        </div>

                        <div style ={{width:'50%', marginTop:'10px'}}>
                            
                            <div className = 'contact-content' style = {{width:'90%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ex orci. Phasellus nisl eros, gravida ac sem a, rutrum volutpat nulla. Nunc efficitur lectus et nunc ornare, at tincidunt nulla imperdie?
                            </div>

                            <div style = {{display:'flex', marginTop:'50px'}}>
                                
                                {/* <div >
                                    <div  className = 'contact-content'>EUROPE</div>
                                    <div  className = 'contact-content'>01234 567 8910</div>
                                </div>

                                <div style ={{marginLeft:'60px'}}>
                                    <div  className = 'contact-content'>INDIA</div>
                                    <div  className = 'contact-content'>+91-7463534567</div>
                                </div> */}
                            </div>

                            <div  style  ={{marginTop:'30px'}}>
                                <div  className = 'contact-content'>Email</div>
                                <div  className = 'contact-content'>info@codabl.com</div>
                            </div>    

                        </div>
                    </div> 

                    <div style = {{ paddingLeft: '40px' , marginTop: '80px'}}>
                        <div className = 'contact-location-bluebox'></div>

                        <div style  ={{display:'flex'}}>
                            <div className = 'contact-location-image'> 
                                <img src = {contactLocation} style  ={{width:'650px', height:'380px'}} /> </div>
                            
                            <div style = {{width:'30%', marginTop:'-220px', marginLeft:'80px'}}>
                                <div className = 'contact-head'>Head Office</div>
                                <div className = 'contact-address'>
                                    <div>175 Varick Street,</div>
                                    <div>New York,</div>
                                    <div>NY 10014</div>
                                </div>    
                            </div>
                        </div>    
                    </div>

                </div>
         )
    }
}

export default Contact