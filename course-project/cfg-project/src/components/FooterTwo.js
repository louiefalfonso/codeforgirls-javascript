import React, { Component } from 'react';
import FooterLogo from './images/footer-logo.png';

class FooterTwo extends Component {
    render() {
        return (
            <div className="second-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="caption"><img src={FooterLogo} alt=""/></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="contact-wrapper">
                                <ul>
                                    <li><i className="fa fa-university" aria-hidden="true"></i>1386 London Road SS9 2UJ</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>+44 (07)123456789</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="contact-wrapper last-wrapper">
                                <ul>
                                    <li><i className="fa fa-question-circle" aria-hidden="true"></i>Terms & Conditions</li>
                                    <li><i className="fa fa-unlock-alt" aria-hidden="true"></i>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterTwo;