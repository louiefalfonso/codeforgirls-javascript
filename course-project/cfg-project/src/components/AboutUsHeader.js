import React, { Component } from 'react';
import { Link } from "react-router-dom";


class AboutUsHeader extends Component {
    render() {
        return (
            <div className="header-title section-padding">
                <div className="container">
                    <h2 className="title">About Us</h2>
                    <span className="sub-title"><Link to="/">Home</Link>/ <span className="text-color">About Us</span></span>
                </div>
            </div>
        );
    }
}

export default AboutUsHeader;