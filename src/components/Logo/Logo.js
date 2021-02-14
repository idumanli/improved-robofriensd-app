import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import mylogo from './logo.png';
const Logo = () => {
   return (
       <div className= 'ma4 mt0'>
       <Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"> <img src={mylogo} alt='logo'/> </div>
</Tilt>
       	
       </div>
   	);
}

export default Logo;