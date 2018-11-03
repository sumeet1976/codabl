
import React, {Component} from 'react';

import BlogsPage from './BlogsPage/blogsPage';
import WelcomeToBlog from './WelcomeToBlog/welcomeToBlog';

import {blogsWelcomePage, blogsDetail } from '../../utils/blogsUtils';

import './blog.css';


class Blog extends Component{

    render(){
         return(
                <div style = {{paddingBottom:'100px'}}>
                    
                    <WelcomeToBlog detail = {blogsWelcomePage } />
                    <BlogsPage detail   = {blogsDetail} />
                    

                </div>
         )
    }
}

export default Blog