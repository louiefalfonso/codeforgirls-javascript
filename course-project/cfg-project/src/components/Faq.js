import React, { Component } from 'react';
import FaqHeader from './FaqHeader';
import FaqContent from './FaqContent';
import SubscribeSection from './SubscribeSection';

class Faq extends Component {
    render() {
        return (
            <>
                <div className="aboutPage">
                <FaqHeader/>
                <FaqContent/>
                </div>
                <SubscribeSection/>
            </>
        );
    }
}

export default Faq;