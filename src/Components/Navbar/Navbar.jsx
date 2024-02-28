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
            <div className={navBar}>
                <ul>
                    <li className="navList">Destination</li>
                    <li className="navList">About Us</li>
                    <li className="navList">Testimonial</li>
                    <li className="navList">Gallery</li>
                </ul>
                {/* Icon to remove navbar */}
                <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
            </div>
            <button className="singUpBtn btn">Sign Up</button>
            {/* Icon to toggle navbar */}
            <PiDotsNineBold className="icon menuIcon" onClick={showNavBar}/>


        </div>
    );
}

export default Navbar;