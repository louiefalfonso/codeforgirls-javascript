/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Project1 from './images/project/1.jpg';
import Project2 from './images/project/2.jpg';
import Project3 from './images/project/3.jpg';
import Project4 from './images/project/4.jpg';
import Project5 from './images/project/5.jpg';
import Project6 from './images/project/6.jpg';

class ProjectGrid extends Component {
    render() {
        return (
            <div className="portfolio gallery-grid">
                <div className="row">
                    <ul className="portfolio-sorting gallery-button list-inline text-center">
                        <li><a href="#" data-group="all" className="filter-btn active">All</a></li>
                        <li><a class="filter-btn" href="#" data-group="people">Landscaping</a></li>
                        <li><a class="filter-btn" href="#" data-group="simpsons">Gardening</a></li>
                        <li><a class="filter-btn" href="#" data-group="futurama">Weed Control</a></li>
                    </ul> 
                    <div id="lightBox" className="gallery-wrapper">
                        <ul className="portfolio-items courses list-unstyled" id="grid">
                                <li className="col-lg-4 col-sm-6" data-groups='["simpsons"]'>
                                    <figure className="portfolio-item gallery-caption">
                                        <img src={Project5} alt=""/>
                                        <div className="hover-view">
                                            <Link to="/"><i className="fa fa-picture-o"></i></Link>
                                            <span className="border-one"></span>
                                            <span className="border-two"></span>
                                            <span className="border-three"></span>
                                            <span className="border-four"></span>
                                        </div>
                                    </figure>
                                </li>
                                <li className="col-lg-4 col-sm-6" data-groups='["people"]'>
                                    <figure className="portfolio-item gallery-caption">
                                        <img src={Project2} alt=""/>
                                        <div className="hover-view">
                                            <Link to="/"><i className="fa fa-picture-o"></i></Link>
                                            <span className="border-one"></span>
                                            <span className="border-two"></span>
                                            <span className="border-three"></span>
                                            <span className="border-four"></span>
                                        </div>
                                    </figure>
                                </li>
                                <li className="col-lg-4 col-sm-6" data-groups='["futurama"]'>
                                    <figure className="portfolio-item gallery-caption">
                                        <img src={Project4} alt=""/>
                                        <div className="hover-view">
                                            <Link to="/"><i className="fa fa-picture-o"></i></Link>
                                            <span className="border-one"></span>
                                            <span className="border-two"></span>
                                            <span className="border-three"></span>
                                            <span className="border-four"></span>
                                        </div>
                                    </figure>
                                </li>
                                <li className="col-lg-4 col-sm-6" data-groups='["futurama"]'>
                                    <figure className="portfolio-item gallery-caption">
                                        <img src={Project3} alt=""/>
                                        <div className="hover-view">
                                            <Link to="/"><i className="fa fa-picture-o"></i></Link>
                                            <span className="border-one"></span>
                                            <span className="border-two"></span>
                                            <span className="border-three"></span>
                                            <span className="border-four"></span>
                                        </div>
                                    </figure>
                                </li>
                                <li className="col-lg-4 col-sm-6" data-groups='["simpsons"]'>
                                    <figure className="portfolio-item gallery-caption">
                                        <img src={Project1} alt=""/>
                                        <div className="hover-view">
                                            <Link to="/"><i className="fa fa-picture-o"></i></Link>
                                            <span className="border-one"></span>
                                            <span className="border-two"></span>
                                            <span className="border-three"></span>
                                            <span className="border-four"></span>
                                        </div>
                                    </figure>
                                </li>
                                <li className="col-lg-4 col-sm-6" data-groups='["people"]'>
                                    <figure className="portfolio-item gallery-caption">
                                        <img src={Project6} alt=""/>
                                        <div className="hover-view">
                                            <Link to="/"><i className="fa fa-picture-o"></i></Link>
                                            <span className="border-one"></span>
                                            <span className="border-two"></span>
                                            <span className="border-three"></span>
                                            <span className="border-four"></span>
                                        </div>
                                    </figure>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectGrid;