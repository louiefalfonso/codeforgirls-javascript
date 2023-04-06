import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import TeamsHeader from './TeamsHeader';
import TeamsContent from './TeamsContent';

class Teams extends Component {
    render() {
        return (
            <>
               <div className="teamPage">
                <TeamsHeader/>
                    <div className="team-section-three section-padding">
                        <TeamsContent/>
                    </div>
                <SubscribeSection/>
            </div>
            </>
        );
    }
}

export default Teams;