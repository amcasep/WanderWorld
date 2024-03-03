import './Middle.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Middle = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="middle section container">
            <div className="secContainer">
                <div className="grid" >
                    <span className="flex" >
                        <h1>10</h1>
                        <p>World of Experiences</p>
                    </span>
                    <span className="flex" >
                        <h1>2K+</h1>
                        <p>Fine Destinations</p>
                    </span>
                    <span className="flex" >
                        <h1>10K+</h1>
                        <p>Customer Reviews</p>
                    </span>
                    <span className="flex" >
                        <h1>4.8</h1>
                        <p>Overall Rating</p>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default Middle;