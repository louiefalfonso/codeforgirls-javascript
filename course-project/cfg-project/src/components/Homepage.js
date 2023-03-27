import React, { Component } from 'react';
import CountingSection from './CountingSection';
import DoubleSection from './DoubleSection';
import GrowingSection from './GrowingSection';
import MainServices from './MainServices';
import MainSlider from './MainSlider';
import ProjectSection from './ProjectSection';
import QuoteSection from './QuoteSection';
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
                <QuoteSection/>
                <DoubleSection/>
                <SubscribeSection/>
            </>
        );
    }
}

export default Homepage;