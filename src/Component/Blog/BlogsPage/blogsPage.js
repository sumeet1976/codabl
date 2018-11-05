

import React from 'react';

import './blogsPage.css';

const BlogsPage  = (props) =>{

    return(
        <div  className = 'bp-container'>

            {
                props.detail.map((item,i) =>
                  
                    <div style = {{marginLeft:"40px", width :'26%'}}>
                        <img src = {item.image} style = {{width:"100%", height :'240px'}} />

                        <div className = 'bp-title'>{item.title} </div>
                        <div className = 'bp-date'>{item.dateOfBlog} </div>
                    </div>    
                )
            }
        </div>
    )

}

export default BlogsPage;