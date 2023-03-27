import React, { Component } from 'react';
import Partner1 from './images/partner/p1.jpg';
import Partner2 from './images/partner/p2.jpg';
import Partner3 from './images/partner/p3.jpg';
import Partner4 from './images/partner/p4.jpg';
import Partner5 from './images/partner/p5.jpg';

class DoubleSection extends Component {
    render() {
        return (
            <div className="double-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="partner-section">
                                <div className="section-title text-center">
                                    <h2>Our <span className="text-color">Partners</span></h2>
                                </div> 
                                <div className="partner-wrapper">
                                    <ul className="text-center">
                                        <li className="wow zoomIn"><img src={Partner1} alt=""/></li>
                                        <li className="wow zoomIn" data-wow-delay="0.1s"><img src={Partner2} alt=""/></li>
                                        <li className="wow zoomIn" data-wow-delay="0.2s"><img src={Partner3} alt=""/></li>
                                        <li className="wow zoomIn" data-wow-delay="0.3s"><img src={Partner4} alt=""/></li>
                                        <li className="wow zoomIn" data-wow-delay="0.4s"><img src={Partner5} alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="question-section">
                                <div className="section-title">
                                    <h2>General <span className="text-color">Questions</span></h2>
                                </div> 

                                <div className="question-accordion">
                                    <div className="panel-group" id="question-accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a role="button" data-toggle="collapse" data-parent="#question-accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="open">
                                                    Q: How can I get a quote?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed open" role="button" data-toggle="collapse" data-parent="#question-accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Q: How can I schedule an appointment?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed open" role="button" data-toggle="collapse" data-parent="#question-accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Q: Where can I find a list of prices?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoubleSection;