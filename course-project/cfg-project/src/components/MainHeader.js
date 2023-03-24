/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MainLogo from './images/logo.png';
import MediumLogo from './images/logo-m.png';
import Navbar from './Navbar';

class MainHeader extends Component {
    render() {
        return (
            <div className="header-section">
                <div className="navbar navbar-inverse hidden-sm hidden-xs">
                    <div className="container">
                        <div className="navbar-header">
                        <Link to="/" className="navbar-brand"><img src={MainLogo} alt="Logo"/></Link>
                        </div>
                        <Navbar/>
                    </div> 
                </div>
                <div className="navbar-header inline-block visible-sm visible-xs">
                   <Link to="/" className="navbar-brand"><img src={MediumLogo} alt="Logo"/></Link>
                </div>
            </div>
        );
    }
}

export default MainHeader;