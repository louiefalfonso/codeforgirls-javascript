import React, { Component } from 'react';

class QuoteSection extends Component {
    render() {
        return (
            <div className="quote-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-md-offset-5">
                            <div className="section-title">
                                <h2>Request for a <span className="text-color">Quick Quote</span></h2>
                            </div>
                            <form className="quote-form text-left">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input id="name" name="name" type="text" className="form-control"  required="" placeholder="First name.."/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" type="email" required="" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="selection">
                                            <select name="one" className="dropdown-select">
                                                <option value="">- Select Service -</option>
                                                <option value="1">Vegetable Gardening</option>
                                                <option value="2">Tree Surgery</option>
                                                <option value="3">Garden Clearence</option>
                                                <option value="4">Plant Care</option>
                                                <option value="5">Lawn Watering</option>
                                                <option value="5">Weed Control</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button className="subscribeBtn" type="submit">Get Quote</button>
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            </div>
        );
    }
}

export default QuoteSection;