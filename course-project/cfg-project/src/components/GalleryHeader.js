import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GalleryHeader extends Component {
    render() {
        return (
            <div className="header-title section-padding">
                <div class="container">
                    <h2 class="title">Our Gallery</h2>
                    <span class="sub-title"><Link to="/">Home</Link>/ <span class="text-color">Gallery</span></span>
                </div>
            </div>
        );
    }
}

export default GalleryHeader;