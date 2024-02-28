import './Portfolio.css'
import icon1 from '../../assets/protection.png'
import icon2 from '../../assets/destination.png'
import icon3 from '../../assets/chat.png'
import img from '../../assets/traveller.jpg'

const Portfolio = () => {
    return (
        <div className="Portfolio section container">
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3>Why should You Choose Us</h3>
                        <p>We have extensive knowledge and experience in the travel industry.</p>
                    </div>
                    <div className="grid">
                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon1} alt="icon image"/>
                            </div>
                            <div className="infor">
                                <h4>Safety and support</h4>
                                <p>Our top priority is the safety 
                                    and well-being of our clients.
                                    We maintain high safety standards and 
                                    have emergency support available during the trip
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon2} alt="icon image"/>
                            </div>
                            <div className="infor">
                                <h4>Diverse Range of Destinations</h4>
                                <p>Wether it's a domestic tour or an 
                                    international adventure, we 
                                    cover a wide range of destinations to 
                                    cater to different interests and preferences.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon3} alt="icon image"/>
                            </div>
                            <div className="infor">
                                <h4>24/7 Customer Support</h4>
                                <p>Our dedicated customer support team is
                                    available round the clock to adress any
                                    queries or concerns before, during, and afer the trip.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rightContent">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;