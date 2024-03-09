import './Footer.css'
import { CgAirplane } from "react-icons/cg";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="Footer">
            <div className="secContainer container grid" data-aos='fade-up'>
                <div className="logoDiv">
                    <div className="footerLogo">
                        <CgAirplane className="icon" />
                        <span>WanderWorld</span>
                    </div>
                </div>
                <div className="socials flex">
                    <ImFacebook className="icon" />
                    <BsTwitterX className="icon" />
                    <AiFillInstagram className="icon" />
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#destinations">Destinations</a>
                    </li>
                    <li>
                        <a href="#about us">About Us</a>
                    </li>
                    <li>
                        <a href="#">Favorites</a>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Helpful Links</span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Travel & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </div>
                {/* <div className="footerLinks">
                    <span className="linkTitle">Contact Details</span>
                    <span className="phone">+657 254 297</span>
                    <span className="email">email@email.com</span>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;