import './Reviews.css'
import { AiFillStar } from "react-icons/ai";
import img1 from '../../assets/review1.jpg'
import img2 from '../../assets/review2.jpg'
import img3 from '../../assets/review3.jpg'
import img4 from '../../assets/review4.jpg'
import img5 from '../../assets/woman.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Reviews = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="Reviews section container">
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText" data-aos='fade-up'>FROM OUR CLIENTS</span>
                    <h3 data-aos='fade-up'>Real Travel History From Our Beloved Clients</h3>
                    <p data-aos='fade-up'>By chossing us as their tour agency, customers can expect
                        an enriching and enjoyable travel experience, filled with
                        unforgettable memories that will last a lifetime. 
                    </p>
                    <span className="stars flex" data-aos='fade-up'>
                    <AiFillStar className='icon' />
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    <AiFillStar className='icon'/>
                    </span>
                    <div className="clientsImages flex" data-aos='fade-up'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="imgDiv" data-aos='fade-up'>
                    <img src={img5} alt="Client" />
                </div>
            </div>
        </div>
    );
}
 
export default Reviews;