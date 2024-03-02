import './Destinations.css'
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import image1 from '../../assets/ciudadperdida.jpg'
import image2 from '../../assets/amsterdam.jpg'
import image3 from '../../assets/dubai.jpg'
import image4 from '../../assets/lapaz.jpg'
import image5 from '../../assets/maldives.jpg'
import image6 from '../../assets/london.jpg'
import image7 from '../../assets/paris.jpg'
import image8 from '../../assets/vancouver.jpg'

const destinations = [
    {
        id: 1,
        img: image1,
        name: 'Santa Marta',
        location: 'Colombia',
        rating: 4.9
    },
    {
        id: 2,
        img: image2,
        name: 'Amsterdam',
        location: 'The Netherlands',
        rating: 4.9
    },
    {
        id: 3,
        img: image3,
        name: 'Dubai',
        location: 'United Arab Emirates',
        rating: 4.9
    },
    {
        id: 4,
        img: image4,
        name: 'La Paz',
        location: 'Bolivia',
        rating: 4.9
    },
    {
        id: 5,
        img: image5,
        name: 'Male',
        location: 'Maldives',
        rating: 4.9
    },
    {
        id: 6,
        img: image6,
        name: 'London',
        location: 'UK',
        rating: 4.9
    },
    {
        id: 7,
        img: image7,
        name: 'Paris',
        location: 'France',
        rating: 4.9
    },
    {
        id: 8,
        img: image8,
        name: 'Vancouver',
        location: 'Canada',
        rating: 4.9
    }

]

const Destinations = () => {
    return (
        <div className="Destinations section container">
            <div className="secContainer">
                <div className="secText">
                    <span className="redText">EXPLORE NOW</span>
                    <h3>Find your dream destination</h3>
                    <p>Fill in the fields below to find the best spot for your next tour</p>
                </div>
                <div className="searchField grid">
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
                <div className="secMenu">
                    <ul className='flex'>
                        <li className='active'>All</li>
                        <li>Recommended</li>
                        <li>Beach</li>
                        <li>Park</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                    </ul>
                </div>
                <div className="destinationContainer grid">
                    {destinations.map(des => {
                        return (
                            <div className="singleDestination" key={des.id}>
                                <div className="imgDiv">
                                    <img src={des.img} alt="Destination image" />
                                    <div className="descInfo flex">
                                        <div className="text">
                                            <span className="name">{des.name}</span>
                                            <p className="flex"><TiLocation className='icon' />{des.location}</p>
                                        </div>
                                        <span className="rating">{des.rating}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default Destinations;