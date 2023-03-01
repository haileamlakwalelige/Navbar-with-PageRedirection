import React,{useState} from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
/* NavLink is a component used in React Router
 to create an a tag that is styled to look like a link 
 but really uses a pushState action under the hood. 
 It allows developers to create links that link or Navigate 
 between different parts of their React application 
 without leaving or refreshing the page
 NavLink is a special version of the React Router Link component.
  It is mainly used to link different pages in a React application.
   NavLink helps you add styling attributes to the active routes 
   and it also includes the “exact” attribute 
   which will make sure that only the exact path 
   specified in the “to” prop will get the style applied and 
   not any other route under it. 
   NavLink also adds an “activeClassName” prop 
   which will help apply css classes when the route is active
*/
function Navbar(){
    const [showT, setShowT]=useState(true)
    const [showM, setShowM]=useState(false);
    const showNavbarTimes=()=>{
        setShowT(false);
        setShowM(true)
    }
    const showNavbarMenu=()=>{
        setShowM(false);
        setShowT(true);   
    }
    return(
        <nav className={showM === true ? "containers" :"container"}>
        <NavLink className="logo"  
        to="/" exact >Navbar</NavLink>
        <div>
         <ul className={showM === false ? "unordered" : "unordereds"} >
            <li> <NavLink to="/" exact  className="navlink">Home</NavLink></li>
            <li> <NavLink to="/About" exact className="navlink">About</NavLink></li>
            <li><NavLink to="/Service" exact className="navlink">Service</NavLink></li>
            <li> <NavLink to="/Skill" exact className="navlink">Skill</NavLink></li>
            <li> <NavLink to="/Contact" exact className="navlink">Contact</NavLink></li>
            </ul>
            </div>
            <div className="buttons">
            <button className={showT === true ? "times":"time" } onClick={showNavbarTimes}><FaTimes /></button>

        <button className={showM === true ? "navbarButton":"navbarButtons" } onClick={showNavbarMenu}>
            <FaBars />
        </button>
        </div>
        </nav>
    );
}
export default Navbar;