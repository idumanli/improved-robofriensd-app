import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
   return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
       <p onClick={() => onRouteChange('signin')} className= ' navip pa3 f3 link dim white underline pointer'>Sign Out</p>
       </nav>
   	);
}

export default Navigation;