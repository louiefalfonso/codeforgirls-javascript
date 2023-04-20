import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AboutUsAdd1 from './images/men.png';

class AboutUsAdd extends Component {
    render() {
        return (
            <div className="growing-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 visible-sm visible-xs">
                            <div className="caption">
                                <img src={AboutUsAdd1} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <div className="content-wrapper">
                                <h3>Cultivating companies with a love for gardening as green as the gardens they grow.</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididun ut labore et dolore. Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ape riam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                <Link to="/services"><button className="btn btn-primary">Read More</button></Link>
                                <Link to="/aboutus"><button className="btn btn-default">Our History</button></Link>
                            </div>
                        </div>
                        <div className="col-md-5 hidden-sm hidden-xs">
                            <div className="caption wow slideInRight" data-wow-delay="0.2s">
                            <img src={AboutUsAdd1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default AboutUsAdd;