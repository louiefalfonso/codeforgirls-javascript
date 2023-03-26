import React, { Component } from 'react';
import ProjectGrid from './ProjectGrid';

class ProjectSection extends Component {
    render() {
        return (
            <div className="project-section section-padding">
                <div className="container text-center">
                    <div className="section-title text-center">
                        <h2>Recent <span className="text-color">Projects</span></h2>
                    </div>
                    <ProjectGrid/>
                </div>
            </div>
        );
    }
}

export default ProjectSection;