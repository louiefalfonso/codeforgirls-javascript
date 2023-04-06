import React, { Component } from 'react';
import About1 from './images/about/a1.jpg';
import About2 from './images/about/a2.jpg';
import About3 from './images/about/a3.jpg';
import { Link } from "react-router-dom";

class AboutUsContent extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="section-title">
                    <h2>What we offer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque <br/> sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. <br/>Quisque semper justo at risus.</p>
                </div> 

                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="about-wrapper">
                            <span className="caption"><img src= {About1}/></span>

                            <div className="wrapper-content">
                                <h4>Home Gardening</h4>
                                <p>Lorem ipsum dolor sit amet, consect adipisi cing elit. Proin nibh augue, suscipita,scelerisque sed.</p>

                                <button className="btn btn-default"><Link to="/services">Read More</Link></button>
                            </div>
                        </div> 
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="about-wrapper">
                            <span className="caption"><img src={About2} alt="image"/></span>

                            <div className="wrapper-content">
                                <h4>Roof Gardening</h4>
                                <p>Lorem ipsum dolor sit amet, consect adipisi cing elit. Proin nibh augue, suscipita,scelerisque sed.</p>

                                <button className="btn btn-default"><Link to="/services">Read More</Link></button>
                            </div>
                        </div> 
                    </div>

                    <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
                        <div className="about-wrapper">
                            <span className="caption"><img src={About3} alt="image"/></span>

                            <div className="wrapper-content">
                                <h4>Garage gardening</h4>
                                <p>Lorem ipsum dolor sit amet, consect adipisi cing elit. Proin nibh augue, suscipita,scelerisque sed.</p>

                                <button className="btn btn-default"><Link to="/services">Read More</Link></button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsContent;