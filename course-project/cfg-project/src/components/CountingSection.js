import React, { Component } from 'react';

class CountingSection extends Component {
    render() {
        return (
            <div className="counting-section text-center">
                <div className="container">
                    <h2 className="hidden">title</h2>
                    <div className="counting-pusher">
                        <div className="row">
                            <div className="col-md-4 col-sm-64">
                                <div className="counting-wrapper">
                                    <div className="count-description">
                                        <span className="timer">25</span>
                                    </div>
                                    <p>Years of experience</p>
                                </div>  
                            </div>
                            <div className="col-md-4 col-sm-64">
                                <div className="counting-wrapper">
                                    <div className="count-description">
                                        <span className="timer">48</span>
                                    </div>
                                    <p>Team Members</p>
                                </div>  
                            </div>
                            <div className="col-md-4 col-sm-64">
                                <div className="counting-wrapper">
                                    <div className="count-description">
                                        <span className="timer">33</span>
                                    </div>
                                    <p>Awards Wins</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountingSection;