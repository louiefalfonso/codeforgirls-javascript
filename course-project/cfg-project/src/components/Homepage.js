import React, { Component } from 'react';
import MainServices from './MainServices';
import MainSlider from './MainSlider';
import SubscribeSection from './SubscribeSection';

class Homepage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <MainServices/>
                <SubscribeSection/>
            </>
        );
    }
}

export default Homepage;