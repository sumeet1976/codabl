import React, { Component } from 'react';
import {Route} from 'react-router';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import codabl from './images/codabl.svg';
import navbarBackImage from './images/navbarBackImage.png';

import Home from '../src/Component/Home/home';
import About from '../src/Component/About/about';
import Projects from '../src/Component/Projects/projects';
import Services from '../src/Component/Services/services';
import Blog from '../src/Component/Blog/blog';
import Contact from '../src/Component/Contact/contact';
import FooterSponsers from '../src/Component/FooterSponsers/footerSponsers';

import './App.css';


class App extends Component {

  handleLogoClicked = () =>{
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="app">
          <div className = 'app-navbar' style = { this.props.history.location.pathname !== '/services' ?
            {backgroundImage:'url(' + navbarBackImage + ")"} : {backgroundImage:''}}>  
            <div>
              <img src = {codabl}  style = {{width:'45px', height:'45px'}}/>
            </div>
            <div className = 'navLabel company-title' onClick = {this.handleLogoClicked}>
              Codabl
            </div>

            <div className = 'app-nav-link' >
              <div className="navLinks"><NavLink to="/"  activeClassName={"active"} className="navLabel">HOME</NavLink></div>
              <div className="navLinks navLabel-margin"><NavLink to="/about"  activeClassName={"active"} className="navLabel ">ABOUT</NavLink></div>
              <div className="navLinks navLabel-margin"><NavLink to="/services"  activeClassName={"active"} className="navLabel ">SERVICES</NavLink></div>
              <div className="navLinks navLabel-margin"><NavLink to="/projects"  activeClassName={"active"} className="navLabel ">PROJECTS</NavLink></div>
              <div className="navLinks navLabel-margin"><NavLink to="/blog"  activeClassName={"active"} className="navLabel ">BLOG</NavLink></div>
              <div className="navLinks navLabel-margin" style= {{marginRight:'200px'}}><NavLink to="/contact"  activeClassName={"active"} className="navLabel ">CONTACT</NavLink></div>
            </div>
          </div>  
        
          <div>
              <Route  exact path = '/' component = {Home}/> 
              <Route   path = '/about' component = {About}/>  
              <Route   path = '/projects'  component={Projects} /> 
              <Route   path ='/services' component = {Services} />
              <Route   path ='/blog' component = {Blog}/>
              <Route   path = '/contact' component = {Contact}/> 
              
          </div>   

          <FooterSponsers/>
      </div>
    );
  }
}

export default withRouter(App);
