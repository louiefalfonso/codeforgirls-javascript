/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import MainLogo from './images/logo.png';

class MainHeader extends Component {
    render() {
        return (
            <div className="header-section">
                <div className="navbar navbar-inverse hidden-sm hidden-xs">
                    <div className="container">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="index.html"><img src={MainLogo} alt="Logo"/></a>
                        </div>
                        <div className="collapse navbar-collapse navbar-right">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li className="dropdown"><a href="#">About Us</a></li>
                                <li className="dropdown"><a href="#">Services</a></li>
                                <li className="dropdown"><a href="#">Teams</a></li>
                                <li className="dropdown"><a href="#">Gallery</a></li>
                                <li className="dropdown"><a href="#">FAQ</a></li>
                                <li className="dropdown"><a href="#">Pricing</a></li>
                                <li className="dropdown"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default MainHeader;