import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PricingHeader extends Component {
    render() {
        return (
            <div className="header-title section-padding">
                <div className="container">
                    <h2 className="title">Our Pricing</h2>
                    <span className="sub-title"><Link to="/">Home</Link>/ <span className="text-color">Pricing</span></span>
                </div>
            </div>
        );
    }
}

export default PricingHeader;