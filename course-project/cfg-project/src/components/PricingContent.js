import React, { Component } from 'react';
import Shop1 from './images/shop/i1.png';
import Shop2 from './images/shop/i2.png';
import Shop3 from './images/shop/i3.png';
import Shop4 from './images/shop/i4.png';
import Shop5 from './images/shop/i5.png';

class PricingContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="section-title text-center">
                    <h2>Our <span className="text-color">Pricing</span></h2>
                </div> 
                <div className="priceing-wrapper ">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#tab-one" role="tab" data-toggle="tab">
                                    <img src={Shop1} alt=""/>

                                    <div className="tab-content">
                                        <h5>Garden Maintenance</h5>
                                        <p>From <span className="text-color">$55</span> for a team of 2 professionals</p>
                                    </div>
                                </a>
                                </li>
                                <li role="presentation" ><a href="#tab-two" role="tab" data-toggle="tab">
                                    <img src={Shop2} alt=""/>

                                    <div className="tab-content">
                                        <h5>Landscaping & Design</h5>
                                        <p>From <span className="text-color">$55</span> for a team of 2 professionals</p>
                                    </div>
                                </a>
                                </li>
                                <li role="presentation"><a href="#tab-three" role="tab" data-toggle="tab">
                                    <img src={Shop3} alt=""/>

                                    <div className="tab-content">
                                        <h5>Lawn Care</h5>
                                        <p>From <span className="text-color">$55</span> for a team of 2 professionals</p>
                                    </div>
                                </a>
                                </li>
                                <li role="presentation"><a href="#tab-four" role="tab" data-toggle="tab">
                                    <img src={Shop4} alt=""/>

                                    <div className="tab-content">
                                        <h5>Tree Surgery</h5>
                                        <p>From <span className="text-color">$55</span> for a team of 2 professionals</p>
                                    </div>
                                </a>
                                </li>
                                <li role="presentation"><a href="#tab-five" role="tab" data-toggle="tab">
                                    <img src={Shop4} alt=""/>
                                    <div className="tab-content">
                                        <h5>Outdoor Repairs</h5>
                                        <p>From <span className="text-color">$55</span> for a team of 2 professionals</p>
                                    </div>
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-8">
                            <div className="tab-content text-center">
                                <div role="tabpanel" className="tab-pane fade in active" id="tab-one">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Basic Maintenance</h4>
                                                <h5 className="amount">$55</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Premium Maintenance</h4>
                                                <h5 className="amount">$95</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane tab-story fade " id="tab-two">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Premium Landscaping</h4>
                                                <h5 className="amount">$65</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul class="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Basic Landscaping</h4>
                                                <h5 className="amount">$55</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul class="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div role="tabpanel" class="tab-pane fade" id="tab-three">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Basic Lawn Care</h4>
                                                <h5 className="amount">$55</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Premium Lawn Care</h4>
                                                <h5 className="amount">$95</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab-four">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Basic Tree Surgery</h4>
                                                <h5 className="amount">$55</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Premium Tree Surgery</h4>
                                                <h5 className="amount">$95</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="tab-five">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Basic Outdoor Repairs</h4>
                                                <h5 className="amount">$55</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-times" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="priceing-table">
                                                <h4>Premium Outdoor Repairs</h4>
                                                <h5 className="amount">$95</h5>
                                                <p>Basic garden maintenance service includes the following procedures:</p>

                                                <ul className="option">
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lawn mowing</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Weeding</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Hedge trimming</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Leaf clearance</li>

                                                    <li><i className="fa fa-check" aria-hidden="true"></i>vy and removal</li>
                                                </ul>

                                                <a href="#" className="btn btn-primary">Select</a>
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

export default PricingContent;