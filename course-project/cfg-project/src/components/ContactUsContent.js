/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';

class ContactUsContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-wrapper">
                            <ul>
                                <li className="wow fadeInDown">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div className="contact-wrapper">
                                        <h5>Hotline:</h5>
                                        <span className="sub">+44 (07) 1234-567-89</span>
                                    </div>
                                </li>
                                <li className="wow fadeInDown" data-wow-delay="0.2s">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>

                                    <div className="contact-wrapper">
                                        <h5>Email:</h5>
                                        <span className="sub">support@gardenia.com </span>
                                    </div>
                                </li>
                                <li className="wow fadeInDown" data-wow-delay="0.4s">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    <div className="contact-wrapper">
                                        <h5>Working Hours:</h5>
                                        <span className="sub">9am-8pm (Mon - Fri)</span>
                                    </div>
                                </li>
                                <li className="wow fadeInDown" data-wow-delay="0.6s">
                                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                    <div className="contact-wrapper">
                                        <h5>Main Office:</h5>
                                        <span className="sub">Royal Botanic Garden Edinburgh<br/>
                                        Arboretum Pl, Edinburgh EH3 5NZ</span><br/><br/>
                                        <h5>Office:</h5>
                                        <span className="sub">1386 London Road SS9 2UJ</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8932.390071084248!2d-3.2091021!3d55.9650125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7c1de08e6eb%3A0x6305a87387d5746e!2sRoyal%20Botanic%20Garden%20Edinburgh!5e0!3m2!1sen!2suk!4v1679854851109!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUsContent;