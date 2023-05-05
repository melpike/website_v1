import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Logo from '../images/mel-logo.svg';

const NavBar = ({ className, handleMenuClick }) => {
    let isMobileSize = window.innerWidth <= 768;
    const [showMobileMenu, setShowMobileMenu] = useState(isMobileSize);
    const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

    const buttonRef = useRef(null);
    const subMenuRef = useRef(null);
    
    const handleResize = () => {
        setShowMobileMenu(window.innerWidth <= 768);
    }

    useEffect(() => {        
        if(showMobileMenu) {
            window.addEventListener('resize', handleResize);
            document.addEventListener('mousedown', handleMobileMenu);
        } else {
            window.removeEventListener('resize', handleResize);
        }
    }, [showMobileMenu]);

    const handleMobileMenu = (event) => {
        if(event.target.parentElement !== subMenuRef.current && event.target.parentElement !== buttonRef.current) {
            setShowMobileSubMenu(false);
        }
    }

    return (
        <div className={className}>
            <div className="logo">
                <img src={Logo} alt="Mel Pike Logo" />
            </div>
            
            <div className={isMobileSize ? "nav-items mobile" : "nav-items desktop"}>
                {isMobileSize && 
                    <button className={showMobileSubMenu ? "mobile-menu active" : "mobile-menu"} onClick={() => setShowMobileSubMenu(!showMobileSubMenu)} ref={buttonRef}>
                        <span className="bar-one"></span>
                        <span className="bar-two"></span>
                        <span className="bar-three"></span>
                    </button>
                }
                
                <ul className={showMobileSubMenu ? "sub-nav-mobile" : "sub-nav-desktop"} ref={subMenuRef}>
                    <li className="about" onClick={() => handleMenuClick("aboutRef")}>About</li>
                    <li className="resume" onClick={() => handleMenuClick("experienceRef")}>Resume</li>
                    <li className="projects" onClick={() => handleMenuClick("workRef")}>Projects</li>
                    <li className="contact" onClick={() => handleMenuClick("contactRef")}>Contact</li>
                </ul>
                
            </div>
        </div>
    )

}

const styledNavBar = styled(NavBar)`
    align-items: center; 
    box-shadow: 0 0 3px 3px rgba(168, 83, 41, 0.2);
    display: flex;
    height: 86px;
    justify-content: space-around;
    padding: 0 30px;

    .logo {
        display: flex;
        padding-left: 20px;
        width: 25%;

        img {
            width: 115px;
        }
    }

    .nav-items {
        width: 75%;

        ul {
            align-items: center;
            display: flex;
            justify-content: flex-end;
            list-style: none;

            li {
                color: var(--rusty-venture);
                cursor: pointer;
                font-weight: 600;
                text-align: center;
                transition: ease all 350ms;
                width: 100px;
                &:hover {
                    color: #7F3E21;
                    transition: ease all 350ms;
                }
            }
        }

        &.mobile {
            display: flex;
            justify-content: flex-end;

            button.mobile-menu {
                align-items: center;
                background: none;
                border: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                span {
                    background: var(--rusty-venture);
                    border-radius: 5px;
                    height: 4px;
                    margin: 3px;
                    transform-origin: 6px;
                    transition: ease-in-out all 250ms;
                    width: 40px;
                    .bar-one {
                        transform: rotate(0);
                    }
                    .bar-two {
                        opacity: 1;
                    }
                    .bar-three {
                        transform: rotate(0);
                    }
                }
                &.active {    
                    transition: ease-in-out all 250ms;            
                    span.bar-one {
                        transform: rotate(45deg);
                    }
                    span.bar-two {
                        opacity: 0;
                    }
                    span.bar-three {
                        transform: rotate(-45deg);
                    }
                    
                }
            }

            ul.sub-nav-desktop {
                display: none;
            }

            ul.sub-nav-mobile {
                background: var(--creme-de-la-creme);
                box-shadow: 0 3px 3px 3px rgba(168, 83, 41, 0.2);
                flex-direction: column;
                padding: 40px;
                position: absolute;
                right: 0;
                top: 69px;
                li {
                    margin: 10px 0;
                    text-align: left;
                }
            }
        }
    }
`

export default styledNavBar;