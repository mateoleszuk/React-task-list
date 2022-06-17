import React from "react";
import './stylesheet/logo.css';
import logoReact from './stylesheet/react.png'

const Logo = ({ Logo }) => (
    <div className='logoReact'>
    <img
    src={logoReact}
    className='reactLogo' 
    alt='logo de react'
    />
  </div>
);


export default Logo;