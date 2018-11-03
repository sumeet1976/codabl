
import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './services.css';

class Services extends Component{

    state ={
        activeSlide : 0
    }

    settings = {
        dots: true,
        infinite: false,
        verticalSwiping: false,
        slidesToShow: 3,
        slidesToScroll:1,
        swipeToSlide: false,
        vertical: false,
        unslick :false,
        horizontal:true,
        focusOnSelect: false,
        isDragging:true,
        speed:500,                            
        variableWidth: true,
        beforeChange:(current, next) => this.setState({ activeSlide: next }),
        afterChange:(current) => this.setState({ activeSlide: current }),
        responsive: [
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              variableWidth: true,
              dots: true,
              
            }
          }, {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                variableWidth: false,
                dots: true
              },              
            },{
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                variableWidth: false,
                dots: true
              }}
    ]
};
      
    render(){

        return(
            <div className = 'homeService-div'>

                <div style ={{width:'25%'}}>
                     <div className = 'homeService-text homeService-title'>Our Services</div>
                     <div className = 'homeService-bluebox'></div>
                     <div className = 'homeService-text homeService-content'>{this.props.serviceTitleContent}</div>
                </div>    
                
                <div className = 'homeService-slider-div'>
            
                    <Slider {...this.settings} >
                       
                        {this.props.servicesHomePage.map((item,i) =>
                        
                            <div className =  {this.state.activeSlide === i ? 'homeService-slider homeService-slider-active' :'homeService-slider' }   
                                key ={i}>
                                       <div className = {this.state.activeSlide === i ? 'homeService-bluebox homeService-bluebox-active' :'homeService-bluebox' }  
                                            style ={{width:'25px',height:'8px', marginLeft:'-1px'}}>
                                       </div>

                                       <div style ={{padding:'20px 10px 0px 40px '}}>
                                            <div className = {this.state.activeSlide === i ? 
                                                'homeService-serviceName homeService-serviceName-active' :
                                                'homeService-serviceName' } >{item.serviceName} 
                                            </div>

                                            <div className = {this.state.activeSlide === i ? 
                                                'homeService-serviceContent homeService-serviceContent-active' :
                                                'homeService-serviceContent' } >{item.content}
                                            </div>
                                            
                                            <div onClick = {this.props.onClickingKnowMore}
                                                className = {this.state.activeSlide === i ? 
                                                'homeService-knowMore homeService-knowMore-active' :
                                                'homeService-knowMore' } >{item.knowMore}
                                            </div>
                                       </div>    
                            </div>
                        )}
                    </Slider>
    
                </div>
            </div>
        )
    }
}


export default Services;