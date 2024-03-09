import './Navbar.css'
import { CgAirplane } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from 'react';


const Navbar = () => {
//State to track and update navbar
const [navBar, setNavBar] = useState('menu')
//Function to show navbar
const showNavBar = () => {
    setNavBar('menu showNavBar')
}
//Function to remove navbar
const removeNavBar = () => {
    setNavBar('menu')
}
    return (
        <div className="navBar">
            <div className="logoDiv">
                <CgAirplane className="icon" />
                <span>WanderWorld</span>
            </div>
            {/* This div is the menu that shows onClick */}
            <div className={navBar}>
                <ul>
                    <li className="navList"><a href="#destinations">Destinations</a></li>
                    <li className="navList"><a href="#about us">About Us</a></li>
                    <li className="navList"><a href="#faq">FAQ</a></li>
                    <li className="navList"><a>Favorites</a></li>
                </ul>
                {/* Icon to remove navbar */}
                <AiFillCloseCircle className="closeIcon" onClick={removeNavBar} />
            </div>
            <button className="btn">Sign Up</button>
            {/* Icon to toggle navbar */}
            <PiDotsNineBold className="menuIcon" onClick={showNavBar}/>


        </div>
    );
}

export default Navbar;