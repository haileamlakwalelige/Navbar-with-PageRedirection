import React from 'react';


// eslint-disable-next-line no-unused-vars
import {Routes, Route} from 'react-router-dom';
/* React Router is a standard library for routing in React. 
It enables the navigation among views of various components in a React Application,
 allows changing the browser URL, 
and keeps the UI in sync with the URL,     Route means Road(in amharic)*/
/*Route is used to render different components
 based on the URL path. It renders components, 
 which are defined in the Routes. 
 The Routes is an array of route objects or components, 
 which includes a path and a component for each route.
  Each time the user navigates to a new location,
   it checks for the best matching path and renders its associated component.
*/
import Home from './Home';
import About from './About';
import Service from './Service';
import Skill from './Skill';
import Contact from './Contact';
function Routers() {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />}  />
      <Route path="/Skill" element={<Skill />} />
      <Route path="/Contact" element={<Contact />}  />
    </Routes>
  );
}

export default Routers;
