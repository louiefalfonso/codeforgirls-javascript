import React, { Component } from 'react';

class OffCanvasView extends Component {
    render() {
        return (
            <div>
                <span className="menu-toggle navbar visible-xs visible-sm"><i className="fa fa-bars" aria-hidden="true"></i></span>
                <div id="offcanvas-menu" className="visible-xs visible-sm"> 
                    <span className="close-menu"><i className="fa fa-times" aria-hidden="true"></i></span>
                    <ul className="menu-wrapper">
                        <li><a className="active dropmenu" href="index.html">Home</a></li>
                        <li><a className="dropmenu" href="about.html">About Us</a></li>
                        <li><a className="dropmenu" href="services.html">Services</a></li>
                        <li><a className="dropmenu" href="teams.html">Teams</a></li>
                        <li><a className="dropmenu" href="gallery.html">Gallery</a></li>
                        <li><a className="dropmenu" href="faq.html">FAQ</a></li>
                        <li><a className="dropmenu" href="pricing.html">Pricing</a></li>
                        <li><a className="dropmenu" href="contact.html">Contact Us</a></li>
                    </ul>      
                </div>   
            </div>
        );
    }
}

export default OffCanvasView;