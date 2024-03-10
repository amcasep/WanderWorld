import './Destinations.css'
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

import { useEffect, useState } from 'react';
import axios from "axios"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import LeafletMap from '../LeafletMap/LeafletMap';

const Destinations = () => {

    const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

    const [destinations, setDestinations] = useState([]);
    const [originalDestinations, setOriginalDestinations] = useState([]);

    const displayAllDestinations = () => {
        axios.get(API_URL + '/destinations')
            .then((response) => {
                setDestinations(response.data)
                setOriginalDestinations(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    useEffect(() => {
        displayAllDestinations()
    }, []);

    // Dropw Down Menu to filter destinations by choosing continent

    const filterDestinations = (event) => {

        const continent = event.target.value;

        if (continent === "all") {
            setDestinations(originalDestinations)
        } else {
            const filtered = originalDestinations.filter(dest => dest.continent === continent)
            setDestinations(filtered);
        }
    }
    // SearchBar to filter destinations by typying in the search bar the name of the cities

    const [input, setInput] = useState("");

    const fetchDataSearchBar = (value) => {

        axios
            .get(API_URL + "/destinations")
            .then((response) => {
                const result = response.data.filter(dest => dest.city.toLowerCase().includes(value.toLowerCase()));
                setDestinations(result)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchDataSearchBar(value)
    }

    // Fade Up Effect 

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    // Toggle destinations to favorites 

    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (destination) => {

        if (!favorites.map((fav) => fav.id).includes(destination.id)) {
            setFavorites([...favorites, destination]);
        }
        else {
            setFavorites(favorites.filter((fav) => fav.id !== destination.id));
        }
        toggleHeartIcon()
    };
    console.log(favorites)

    // Toggle destination button 

    const toggleHeartIcon = (destination) => {
        return destination ? (favorites.map((fav) => fav.id).includes(destination.id) ? <IoHeart /> : <IoMdHeartEmpty />) : null;
    }


    return (
        <>
            <div className="Destinations section container" id="destinations">
                <div className="secContainer">
                    <div className="secText">
                        <span className="redText" data-aos='fade-up'>EXPLORE NOW</span>
                        <h3 data-aos='fade-up'>Find your dream destination</h3>
                        <p data-aos='fade-up'>Fill in the fields below to find the best spot for your next tour</p>
                    </div>
                    <div className="searchField grid" data-aos='fade-up'>
                        <div className="inputField flex SearchBar">
                            <BiSearchAlt className='icon' />
                            <input type="search" placeholder='Search...' onChange={(e) => handleChange(e.target.value)} value={input} />
                        </div>
                        <select className="continents" onChange={filterDestinations}>
                            <option value="DEFAULT">Select Continent/Country</option>
                            <option value="all">All destinations</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                            <option value="Europe">Europe</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Australia">Australia</option>
                        </select>

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

                                    <div className="singleDestination" key={des.id} data-aos='fade-up'>
                                        <div className="imgDiv" >
                                            <Link to={`/destinations/${des.id}`}>
                                                <img src={des.image} alt="Destination image" />
                                            </Link>
                                            <div className="descInfo flex">
                                                <div className="text">
                                                    <span className="name">{des.city}</span>
                                                    <p className="flex"><TiLocation className='icon' />{des.country}</p>
                                                </div>
                                                <button className="rating" onClick={() => toggleFavorite(des)}>{toggleHeartIcon(des)}</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            )
                        }
                    </div>
                    <LeafletMap destinations={destinations} />
                </div>
            </div>

        </>
    );
}

export default Destinations;