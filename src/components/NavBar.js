import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

  return (
   <>
   <nav className="navbar">
    <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            RDV <i className="fa fa-calendar" aria-hidden="true"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'} aria-hidden="true">
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                     Login
                </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    </div>
    </nav>
   </>
  );
}

export default NavBar
