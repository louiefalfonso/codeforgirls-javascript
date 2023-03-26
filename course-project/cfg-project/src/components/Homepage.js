import React, { Component } from 'react';
import CountingSection from './CountingSection';
import GrowingSection from './GrowingSection';
import MainServices from './MainServices';
import MainSlider from './MainSlider';
import ProjectSection from './ProjectSection';
import SubscribeSection from './SubscribeSection';

class Homepage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <MainServices/>
                <CountingSection/>
                <GrowingSection/>
                <ProjectSection/>
                <SubscribeSection/>
            </>
        );
    }
}

export default Homepage;