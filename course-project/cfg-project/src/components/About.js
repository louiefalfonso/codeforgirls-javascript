import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import AboutUsHeader from './AboutUsHeader';
import AboutUsContent from './AboutUsContent';

class About extends Component {
    render() {
        return (
            <div className="aboutPage">
                <AboutUsHeader/>
                    <div className="about-section-two section-padding">
                        <AboutUsContent/>
                    </div>
                <SubscribeSection/>
            </div>
        );
    }
}

export default About;