import './Questions.css'
import Accordion from './Accordion';
import { useState } from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Questions = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const [active, setActive] = useState('How do I choose the right travel destination for me?')

    return (
        <div className="Questions section container" data-aos='fade-up'>
            <div className="secHeading">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="secContainer grid">

                <div className="accordion grid">
                    <Accordion
                        title='How do I choose the right travel destination for me?'
                        desc='Consider your interests, budget, desired experiences and the type
                        of environment you enjoy. Research destinations that align with
                        your preferences and offer attractions or activities you find appealing.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='What are the best times to visit specific destinations?'
                        desc='Research the climate, weather patterns and peak tourist seasons of
                        the destination you are interested in. Opt for the shoulder seasons when
                        the weather is pleasant and crowds are fewer, if possible.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='How can I find budget-friendly travel options and deals?'
                        desc='Look for travel deals, discounts on flights and accomodations and
                        consider using travel apps or websites that offer competitive prices. Being
                        flexible with your travel dates can also help you find better deals.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='What essential items should I pack for my adventure?'
                        desc='Look for travel deals, discounts on flights and accomodations and
                        consider using travel apps or websites that offer competitive prices. Being
                        flexible with your travel dates can also help you find better deals.'
                        active={active}
                        setActive={setActive}
                    />
                </div>

                <div className="form">
                    <div className="secHeading">
                        <h4>Do you have any specific question?</h4>
                        <p>Please fill the form below and our
                            dedicated team will get in touch
                            with you as soon as possible.
                        </p>
                    </div>
                    <div className="formContent grid">
                        <input type="email" placeholder='Enter email adress' />
                        <textarea placeholder='Enter your question here'></textarea>
                        <button className="btn">Submit Inquiry</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;

