import '../Destinations/Destinations.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TiLocation } from "react-icons/ti";
import { IoHeart } from "react-icons/io5";

const Favorites = () => {

  const API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;

  const [favorites, setFavorites] = useState([]);
  const displayFavorites = () => {
    axios.get(API_URL + '/favorites')
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    displayFavorites()
  }, []);
  console.log(favorites)


  const toggleFavorite = (destination) => {

    axios
      .delete(API_URL + `/favorites/${destination.id}`)
      .then((res) => {
        setFavorites(favorites.filter((fav) => fav.id !== destination.id));
        console.log(res)
      })
      .catch(error => {
        console.error('Error removing destination from favorites:', error);
      });
  }

  return (
    <div className="Destinations section container" id="destinations">
      <div className="secContainer">
        <div className="destinationContainer grid" >
          {!favorites ?
            (<p>Loading...</p>) :
            (favorites.map(des => {
              return (

                <div className="singleDestination" key={des.id} >
                  <div className="imgDiv" >
                    <Link to={`/destinations/${des.id}`}>
                      <img src={des.image} alt="Destination image" />
                    </Link>
                    <div className="descInfo flex">
                      <div className="text">
                        <span className="name">{des.city}</span>
                        <p className="flex"><TiLocation className='icon' />{des.country}</p>
                      </div>
                      <button className="rating" onClick={() => toggleFavorite(des)}><IoHeart /> </button>
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

export default Favorites;