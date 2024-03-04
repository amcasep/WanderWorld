import './Destinations.css'
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";


import { useEffect, useState } from 'react';
import axios from "axios"
import Aos from 'aos';
import 'aos/dist/aos.css'


const Destinations = () => {

    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const [destinations, setDestinations] = useState([]);

    const displayAllDestinations = () => {
        axios.get(API_URL + '/destinations')
            .then((response) => {
                setDestinations(response.data)
                console.log(response.data)
            })
            .catch((e) => {
                console.log(e);
            });
    }
    useEffect(() => {
        displayAllDestinations()
    }, []);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="Destinations section container">
            <div className="secContainer">
                <div className="secText">
                    <span className="redText" data-aos='fade-up'>EXPLORE NOW</span>
                    <h3 data-aos='fade-up'>Find your dream destination</h3>
                    <p data-aos='fade-up'>Fill in the fields below to find the best spot for your next tour</p>
                </div>
                <div className="searchField grid" data-aos='fade-up'>
                    <div className="inputField flex">
                        <MdLocationPin className='icon' />
                        <input type="text" placeholder='Location' />
                    </div>
                    <div className="inputField flex">
                        <BsFillCreditCardFill className='icon' />
                        <input type="text" placeholder='Budget' />
                    </div>
                    <div className="inputField flex">
                        <BsFillCalendarDateFill className='icon' />
                        <input type="text" placeholder='Date' />
                    </div>
                    <button className="btn flex"><BiSearchAlt className='icon' />Search</button>
                </div>
                <div className="secMenu" data-aos='fade-up'>
                    <ul className='flex'>
                        <li className='active'>All</li>
                        <li>Recommended</li>
                        <li>Beach</li>
                        <li>Urban</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                    </ul>
                </div>
                <div className="destinationContainer grid" data-aos='fade-up'>
                    {!destinations ?
                        (<p>Loading...</p>) :
                        (destinations.map(des => {
                            return (
                                <div className="singleDestination" key={des.id}>
                                    <div className="imgDiv" data-aos='fade-up'>
                                        <img src={des.image} alt="Destination image" />
                                        <div className="descInfo flex">
                                            <div className="text">
                                                <span className="name">{des.city}</span>
                                                <p className="flex"><TiLocation className='icon' />{des.country}</p>
                                            </div>
                                            <span className="rating">{des.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Destinations;