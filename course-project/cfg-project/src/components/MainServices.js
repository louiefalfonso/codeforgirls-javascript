import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ServicesRow from './ServicesRow';
import ServicesTitle from './ServicesTitle';

class MainServices extends Component {
    render() {
        return (
            <div className="service-section section-padding">
                <div className="container text-center">
                    <ServicesTitle/>
                    <ServicesRow/>
                </div>
                <div className="more-service">
                <Link to="/services" class="link btn btn-default">All Services</Link>
                </div>
            </div>
        );
    }
}

export default MainServices;