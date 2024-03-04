import './Home.css'
import Middle from '../Middle/Middle';
import Destinations from '../Destinations/Destinations';
import Portfolio from '../Portfolio/Portfolio';
import Reviews from '../Reviews/Reviews';
import Questions from '../Questions/Questions';

import video from '../../assets/video.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";
import { useEffect } from 'react';
import image6 from '../../assets/london.jpg'
import image2 from '../../assets/amsterdam.jpg'
import image3 from '../../assets/dubai.jpg'
import image4 from '../../assets/lapaz.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="Home">
                <div className="videoBg">
                    <video src={video} autoPlay loop muted></video>
                </div>
                <div className="sectionText">
                    <h1 data-aos='fade-up'>Unlock your travel dreams with us!</h1>
                    <p data-aos='fade-up'>Because money returns, but time doesn't</p>
                    <button className='btn flex' data-aos='fade-up'>GET STARTED <AiOutlineSwapRight className='icon' /></button>
                </div>
                <div className="popularPlaces" data-aos='fade-up'>
                    <div className="content">
                        <h3>Popular Places</h3>
                        <div className="images flex">
                            <img src={image6} alt="" />
                            <img src={image2} alt="" />
                            <img src={image3} alt="" />
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Middle />
            <Destinations />
            <Portfolio />
            <Reviews />
            <Questions />
        </>
    );
}

export default Home;