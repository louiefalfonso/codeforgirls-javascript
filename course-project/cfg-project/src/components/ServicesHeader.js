import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ServicesHeader extends Component {
    render() {
        return (
            <div className="header-title section-padding">
                <div className="container">
                    <h2 className="title">Services</h2>
                    <span className="sub-title"><Link to="/">Home</Link>/ <span className="text-color">Services</span></span>
                </div>
            </div>
        );
    }
}

export default ServicesHeader;