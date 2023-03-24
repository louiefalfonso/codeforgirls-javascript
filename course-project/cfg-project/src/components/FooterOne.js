import React, { Component } from 'react';

class FooterOne extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-wrapper first-wrapper">
                                <h3>Stay Connected</h3>
                                <p>Join over 30,000+ people who recieve our <br/> monthy newspaper of gardening tips</p>
                                <form className="footerForm">
                                    <input className="footerSearchBar" id="email2" name="email" type="email" required="" placeholder="Email address"/>

                                    <button type="submit" className="subscribeBtn btn-primary">Subscribe</button>
                                </form>
                                <ul className="social-icon">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                </ul> 
                            </div> 
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-wrapper">
                                <h3>About</h3>
                                <p>All of Fantastic Gardener's staff are friendly,offering help with the things you don't want to do or just don't have the time for, and doing it in a way you actually enjoy the thought of being lazy and paying somebody else.</p>
                                <a href="#" className="link">Join Now</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-md-offset-0 col-sm-5 col-sm-offset-1">
                            <div className="footer-wrapper">
                                <h3>Navigation</h3>
                                <ul className="wrapper-option">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Teams</a></li>
                                </ul> 
                                <ul className="wrapper-option">
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div> 
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default FooterOne;