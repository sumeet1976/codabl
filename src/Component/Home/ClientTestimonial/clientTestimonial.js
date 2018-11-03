
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import './clientTestimonial.css';

const ClientTestimonial = (props) =>{
   
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
    }

    const style = {
        backgroundImage: "url(" + props.backgroundImageSlider + ")" 
    }

    return(
            <div className = 'ct-div' style = {style} >
                <Slider {...settings} >
                    
                    {props.detailsClient.map((item,i) =>
                        <div>
                            <div  className = 'ct-common ct-content-text'>{item.content}</div>
                            <div className = 'ct-common ct-name'>{item.clientName}</div>
                            <div className = 'ct-common ct-designation'>{item.designation} </div>
                        </div>
                    )}

                </Slider>
            </div>
    )
}

export default ClientTestimonial;