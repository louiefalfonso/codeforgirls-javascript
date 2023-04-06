import React, { Component } from 'react';
import TeamMember1 from './images/team/t9.jpg';
import TeamMember2 from './images/team/t10.jpg';
import TeamMember3 from './images/team/t11.jpg';
import TeamMember4 from './images/team/t12.jpg';
import TeamMember5 from './images/team/t13.jpg';
import TeamMember6 from './images/team/t14.jpg';

class TeamsContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="team-part">
                            <div className="row first-part">
                            <div className="col-sm-4">
                                <div className="section-wrapper">
                                    <span className="caption"><img src={TeamMember1} alt="image"/></span>
                                    <div className="wrapper-content">
                                        <h3>Hasib Sharif</h3>
                                        <span className="position">Founder &amp; CEO</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>

                                        <a href="#" className="link">View Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="section-wrapper">
                                    <span className="caption"><img src={TeamMember2} alt="image"/></span>

                                    <div className="wrapper-content">
                                        <h3>Hasib Sharif</h3>
                                        <span className="position">Founder &amp; CEO</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                        <a href="#" className="link">View Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="section-wrapper">
                                    <span className="caption"><img src={TeamMember3} alt="image"/></span>
                                    <div className="wrapper-content">
                                        <h3>Hasib Sharif</h3>
                                        <span className="position">Founder &amp; CEO</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                        <a href="#" className="link">View Profile</a>
                                    </div>
                                </div>
                            </div>
                             </div>
                            <div className="row">
                            <div className="col-sm-4">
                                <div className="section-wrapper">
                                    <span className="caption"><img src={TeamMember4} alt="image"/></span>
                                    <div className="wrapper-content">
                                        <h3>Hasib Sharif</h3>
                                        <span className="position">Founder &amp; CEO</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                        <a href="#" className="link">View Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="section-wrapper">
                                    <span className="caption"><img src={TeamMember5} alt="image"/></span>
                                    <div className="wrapper-content">
                                        <h3>Hasib Sharif</h3>
                                        <span className="position">Founder &amp; CEO</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                        <a href="#" className="link">View Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="section-wrapper">
                                    <span className="caption"><img src={TeamMember6} alt="image"/></span>

                                    <div className="wrapper-content">
                                        <h3>Hasib Sharif</h3>
                                        <span className="position">Founder &amp; CEO</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                        <a href="#" className="link">View Profile</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default TeamsContent;