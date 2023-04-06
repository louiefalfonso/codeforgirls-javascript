import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TeamsHeader extends Component {
    render() {
        return (
            <div className="header-title section-padding">
                <div className="container">
                    <h2 className="title">Our Team</h2>
                    <span className="sub-title"><Link to="/">Home</Link>/ <span className="text-color">Teams</span></span>
                </div>
            </div>
        );
    }
}

export default TeamsHeader;