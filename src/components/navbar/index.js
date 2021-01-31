import React, { useState } from "react";
import chargebee from '../../assets/chargebee-logo-black.svg';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import "./navbar.css";


function Navbar() {
  const [isclick, setClick] = useState(false);
  const handleClick = () => setClick(!isclick);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar"> 
        <a className="navbar-logo" onClick={closeMobileMenu}>
            <img src={chargebee} style={{height: '34px', verticalAlign: 'middle'}}/>
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {isclick ? <CloseIcon /> : <MenuIcon />}
        </div>
            <ul className={isclick ? "nav-menu mobile" : "nav-menu"}>
                <li className="nav-item">
                <a href="#"
                className="nav-links" 
                onClick={closeMobileMenu}>
                Product
                </a>
                </li>
                <li className="nav-item">
                <a href="#"
                className="nav-links" 
                onClick={closeMobileMenu}>
                Pricing
                </a>
                </li>
            <li className="nav-item">
                <a href="#"
                className="nav-links" 
                onClick={closeMobileMenu}>
                Solutions
                </a>
            </li>
            <li className="nav-item">
                <a href="#"
                className="nav-links"
                onClick={closeMobileMenu}>
                    Customers
                </a>
            </li>
            <li className="nav-item">
                <a href="#"
                className="nav-links"
                onClick={closeMobileMenu}>
                    Resources
                </a>
            </li>
            </ul> 
         
        <div className="nav-button">
           <Button
           size="medium"
           style={{textTransform: 'inherit', fontWeight: '600'}}
           startIcon={<LockIcon style={{color: '#FF7846'}} /> } 
           endIcon={<ChevronRightIcon />}
            >
               Log in</Button> 
               <Button 
               href="#" 
               size="medium"
               endIcon={<ChevronRightIcon />}
               variant="contained" 
               style={{backgroundColor: '#FF7846', color: "#fff", textTransform: 'inherit'}}
               >
                   Schedule a Demo
               </Button>
        </div>
      </div> 
    </>
  );
}

export default Navbar;
