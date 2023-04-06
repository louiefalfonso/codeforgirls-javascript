import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OffCanvasView extends Component {
    render() {
        return (
            <>
                <span className="menu-toggle visible-xs visible-sm"><i className="fa fa-bars" aria-hidden="true"></i></span>
                <div id="offcanvas-menu" className="visible-xs visible-sm"> 
                    <span className="close-menu"><i className="fa fa-times" aria-hidden="true"></i></span>
                    <ul className="menu-wrapper">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/teams">Teams</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>      
                </div>   
            </>
        );
    }
}

export default OffCanvasView;