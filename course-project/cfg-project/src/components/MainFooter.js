import React, { Component } from 'react';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';

class MainFooter extends Component {
    render() {
        return (
            <div className="footer-section">
                <FooterOne/>
                <FooterTwo/>
            </div>
        );
    }
}

export default MainFooter;