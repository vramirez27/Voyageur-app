import React from 'react'
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Button from 'components/Button/Button.js';
import 'components/Navbar/Navbar.css';
import 'App.css';

function NavIcon (props){
    return (<i className ={props.classN}/>)
    };

function Navbar() {
    const [isClicked, setIsClicked] =  useState(false);
    const [button, setButton] = useState(true);

    const handleClick = (e)  =>  {
       
        setIsClicked(!isClicked)
        };
        const closeMobileMenu = ()=>{
            setIsClicked(false);
        };
        const showButton =() =>{
            if (window.innerWidth <= 960){
                setButton(false);
            }else{
                setButton(true);
            }
        };
        useEffect(()=>{
            showButton();
        },[])
       
 window.addEventListener('resize', showButton)
    return (
        <>
         <nav className = 'navbar'>
             <div className = 'navbar-container'>
                 <Link to = '/' className = 'navbar-logo' onClick ={closeMobileMenu}>
                    <i className="fa fa-globe" ></i> VOYAGEUR
                 </Link>
                 <div className = 'menu-icon' onClick = {handleClick}>
                     <NavIcon classN = {isClicked ? 'fa fa-times': 'fa fa-bars'}/>
                  
                 </div>

                 <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                     <li className = 'nav-item'>
                         <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>Home</Link>

                     </li>
                      <li className = 'nav-item'>
                         <Link to = '/services' className = 'nav-links' onClick = {closeMobileMenu}> Services</Link>

                     </li>
                      <li className = 'nav-item'>
                         <Link to = '/products' className = 'nav-links' onClick = {closeMobileMenu}>Products</Link>

                     </li>
                      <li className = 'nav-item'>
                         <Link to = '/sign-up' className = 'nav-links-mobile' onClick = {closeMobileMenu}>Sign Up</Link>

                     </li>
 
                 </ul>
                 {button&& <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}

             </div>
         </nav>
        </>
    )}

export default Navbar;
