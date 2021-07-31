import React from 'react';
import logo from './PACHA.png';
import './Menu.css';
import {NavLink} from "react-router-dom";
class Menu extends React.Component {
  render() {
  	return (
		  
  		<nav className="principal navbar navbar-expand-lg navbar-light fixed-top bg-light">
			
		    <NavLink to="/inicio" className="nav-link">  
		   		<img src={logo} alt="logo" height="" width="150" /> 
			</NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">			  
			        <li className="nav-item"> 
			        </li>
			    </ul>			    
					<NavLink to="/login" className="nav-link"> Login </NavLink>
					<NavLink to="/registro" className="nav-link"> Sign in </NavLink>
					<NavLink to="/nosotros" className="nav-link">US </NavLink>
			
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;