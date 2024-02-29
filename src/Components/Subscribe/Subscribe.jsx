import './Subscribe.css'
import img1 from '../../assets/phonecall.jpg'

const Subscribe = () => {
    return (
        <div className="Subscribe section container">
            <div className="secContainer grid">
                <img src={img1} alt="Lady on phone" />
                <div className="textDiv">
                    <h4>Best Way to Start Your Journey!</h4>
                    <p>We offer personalized itineraries tailored to individual preferences and interests.</p>
                    <button className="btn">Start Here</button>
                </div>
            </div>
        </div>
    );
}
 
export default Subscribe;