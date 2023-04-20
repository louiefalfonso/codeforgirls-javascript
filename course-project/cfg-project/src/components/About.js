import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import AboutUsHeader from './AboutUsHeader';
import AboutUsContent from './AboutUsContent';
import GrowingSection from './GrowingSection';
import CountingSection from './CountingSection';

class About extends Component {
    render() {
        return (
            <div className="aboutPage">
                <AboutUsHeader/>
                    <GrowingSection/>
                    <CountingSection/>
                    <div className="about-section-two section-padding">
                        <AboutUsContent/>
                    </div>
                <SubscribeSection/>
            </div>
        );
    }
}

export default About;