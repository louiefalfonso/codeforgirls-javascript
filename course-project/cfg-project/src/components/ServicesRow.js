import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Icon1 from './images/icon/i1.png';
import Icon2 from './images/icon/i2.png';
import Icon3 from './images/icon/i3.png';
import Icon4 from './images/icon/i4.png';
import Icon5 from './images/icon/i5.png';
import Icon6 from './images/icon/i6.png';

class ServicesRow extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-sm-6">
                        <div className="service-wrapper wow zoomIn">
                            <img src={Icon1} alt=""/>
                            <h3>Vegetable Gardening</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>
                            <Link to="/services" className="link">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="service-wrapper wow zoomIn" data-wow-delay="0.2s">
                        <img src={Icon2} alt=""/>

                            <h3>Tree Surgery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>
                            <Link to="/services" className="link">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="service-wrapper wow zoomIn" data-wow-delay="0.4s">
                        <img src={Icon3} alt=""/>

                            <h3>Garden Clearence</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>
                            <Link to="/services" className="link">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="service-wrapper wow zoomIn" data-wow-delay="0.6s">
                        <img src={Icon4} alt=""/>

                            <h3>Plant Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>
                            <Link to="/services" className="link">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="service-wrapper wow zoomIn" data-wow-delay="0.8s">
                        <img src={Icon5} alt=""/>

                            <h3>Lawn Watering</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>
                            <Link to="/services" className="link">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="service-wrapper wow zoomIn" data-wow-delay="1s">
                        <img src={Icon6} alt=""/>
                            <h3>Weed Control</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore.</p>
                            <Link to="/services" className="link">Read More</Link>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ServicesRow;