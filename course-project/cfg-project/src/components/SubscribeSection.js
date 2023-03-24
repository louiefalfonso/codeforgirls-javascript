import React, { Component } from 'react';
import MessageIcon  from './images/message.png';

class SubscribeSection extends Component {
    render() {
        return (
            <div className="subscribe-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="left-bar">
                                <span className="caption pull-left"><img src={MessageIcon} alt=""/></span>
                                <h3>Subscribe your Email for the newsletter & tips for gardening</h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-bar">
                                <form className="subscribeForm">
                                    <input className="subscribeBar" id="email" name="email" type="email" required="" placeholder="Email address ...."/>
                                    <button type="submit" className="subscribeBtn btn-primary">Send</button>
                                </form>
                            </div> 
                        </div>    
                    </div>
                </div>
            </div>
        );
    }
}

export default SubscribeSection;