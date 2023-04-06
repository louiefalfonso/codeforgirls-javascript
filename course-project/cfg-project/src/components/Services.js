import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import ServicesHeader from './ServicesHeader';
import ServicesContent from './ServicesContent';


class Services extends Component {
    render() {
        return (
            <div className="servicePage">
                <ServicesHeader/>
                    <div className="service-section service-section-three section-padding">
                        <ServicesContent/>
                    </div>
                <SubscribeSection/>
            </div>
        );
    }
}

export default Services;