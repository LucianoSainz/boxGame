import React from 'react';
import "./Footer.scss"
import logo from "../navbar/logo.png";


function Footer() {
    return (
        <footer>
        <h5>created by luci@no sanchez for ironhack</h5>
        <img src={logo} alt="" width="70" heith="75" />
      </footer>
     
    )
}


export default Footer;