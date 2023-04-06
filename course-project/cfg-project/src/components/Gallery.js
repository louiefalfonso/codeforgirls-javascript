import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import GalleryHeader from './GalleryHeader';
import ProjectSection from './ProjectSection';

class Gallery extends Component {
    render() {
        return (
            <>
                <div className="aboutPage">
                <GalleryHeader/>
                <ProjectSection/>
                <SubscribeSection/>
            </div>
            </>
        );
    }
}

export default Gallery;