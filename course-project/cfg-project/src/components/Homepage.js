import React, { Component } from 'react';
import MainSlider from './MainSlider';
import SubscribeSection from './SubscribeSection';

class Homepage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <SubscribeSection/>
            </>
        );
    }
}

export default Homepage;