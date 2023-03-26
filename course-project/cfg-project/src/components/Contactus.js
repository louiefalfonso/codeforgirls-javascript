import React, { Component } from 'react';
import ContactUsContent from './ContactUsContent';
import ContactUsHeader from './ContactUsHeader';
import SubscribeSection from './SubscribeSection';

class Contactus extends Component {
    render() {
        return (
            <div className="contactPage">
                <ContactUsHeader/>
                <div className="contact-section section-padding">
                    <ContactUsContent/>
                </div>
                <SubscribeSection/>
            </div>  
        );
    }
}

export default Contactus;