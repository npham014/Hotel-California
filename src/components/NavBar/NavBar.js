import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import "./Navbar.scss";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Button from "../Button/Button";

export default function NavBar() {
    const [navOpen, setNav] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleNavOpen = () => {
        setNav(!navOpen);
    }
    const closeMobileMenu = () => {
        setNav(false);
    }
    const isScreenSmall = () => {
        if(window.innerWidth <= 960) {
            setShowButton(false);
        }
        else {
            setShowButton(true);
        }
    }    

    window.addEventListener("resize", isScreenSmall);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div><Link to="/" className="navbar-name">HC</Link></div>
                        <div><Link to="/" className="navbar-logo"><img src="/images/lion.png"/></Link></div>
                    </div>
                    <div className="navbar-right" onClick={handleNavOpen}>
                        {navOpen ? <MenuOpenIcon className="icon"/> : <MenuIcon className="icon"/>}
                    </div>
                    <ul className={navOpen ? "nav-menu active" : "nav-menu"}> 
                        <li className='navmenu-item'>
                            <div><Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link></div>
                        </li>
                        <li className='navmenu-item'>
                            <div><Link to="/" className="nav-link" onClick={closeMobileMenu}>Blog</Link></div>
                        </li>
                        <li className='navmenu-item'>
                            <div><Link to="/" className="nav-link" onClick={closeMobileMenu}>Reserve</Link></div>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}
//{showButton && <Button btnStyle="btn--outline">SIGN UP</Button>}