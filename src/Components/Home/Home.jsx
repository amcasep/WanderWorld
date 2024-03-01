import './Home.css'
import video from '../../assets/video.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";

import image6 from '../../assets/london.jpg'
import image2 from '../../assets/amsterdam.jpg'
import image3 from '../../assets/dubai.jpg'
import image4 from '../../assets/lapaz.jpg'

const Home = () => {
    return (
        <div className="Home">
            <div className="videoBg">
                <video src={video} autoPlay loop muted></video>
            </div>
            <div className="sectionText">
                <h1>Unlock your travel dreams with us!</h1>
                <p>Because money returns, but time doesn't</p>
                <button className='btn flex'>GET STARTED <AiOutlineSwapRight className='icon' /></button>
            </div>
            <div className="popularPlaces">
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
    );
}

export default Home;