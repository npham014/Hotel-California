import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import "./Navbar.scss";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


export default function NavBar() {
    const [navOpen, setNav] = useState(false);


    const handleNavOpen = () => {
        setNav(!navOpen);
    }
    const closeMobileMenu = () => {
        setNav(false);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div><Link to="/" className="navbar-name">HC</Link></div>
                        <div><Link to="/" className="navbar-logo"><img src="/images/lion.png" alt="logo for the hotel california, a golden lion"/></Link></div>
                    </div>
                    <div className="navbar-right" onClick={handleNavOpen}>
                        {navOpen ? <MenuOpenIcon className="icon"/> : <MenuIcon className="icon"/>}
                    </div>
                    <ul className={navOpen ? "nav-menu active" : "nav-menu"}> 
                        <li className='navmenu-item'>
                            <div><Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link></div>
                        </li>
                        <li className='navmenu-item'>
                            <div><Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link></div>
                        </li>
                        <li className='navmenu-item'>
                            <div><Link to="/reservation" className="nav-link" onClick={closeMobileMenu}>Reserve</Link></div>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}
//{showButton && <Button btnStyle="btn--outline">SIGN UP</Button>}