import React, { Component } from 'react';

class FaqContent extends Component {
    render() {
        return (
            <div className="accordionEleven-section section-padding">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6 accordionEleven">
                    <div className="panel-group" id="accordionElevenLeft">

                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordionElevenLeft" href="#collapseElevenLeftone">
                                Our Visions and Missions
                            </a>
                            </h4>
                        </div>
                        <div id="collapseElevenLeftone" className="panel-collapse collapse in">
                            <div className="panel-body">
                            Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
                            </div>
                        </div>
                        </div>
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionElevenLeft" href="#collapseElevenLeftTwo">
                                Free Demo Content Installations
                            </a>
                            </h4>
                        </div>
                        <div id="collapseElevenLeftTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                            Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
                            </div>
                        </div>
                        </div>
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionElevenLeft" href="#collapseElevenLeftThree">
                                Visual Page Builder
                            </a>
                            </h4>
                        </div>
                        <div id="collapseElevenLeftThree" className="panel-collapse collapse">
                            <div className="panel-body">
                            Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
                            </div>
                        </div>
                        </div>                           
                    </div>
                    </div>
                    <div className="col-sm-6 accordionEleven">
                    <div className="panel-group" id="accordionElevenRight">
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionElevenRight" href="#collapseElevenRightone">
                                Our Visions and Missions
                            </a>
                            </h4>
                        </div>
                        <div id="collapseElevenRightone" className="panel-collapse collapse">
                            <div className="panel-body">
                            Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
                            </div>
                        </div>
                        </div>
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionElevenRight" href="#collapseElevenRightTwo">
                            Free Demo Content Installations
                            </a>
                            </h4>
                        </div>
                        <div id="collapseElevenRightTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                            Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
                            </div>
                        </div>
                        </div>
                        <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordionElevenRight" href="#collapseElevenRightThree">
                                iOS Development Benefits
                            </a>
                            </h4>
                        </div>
                        <div id="collapseElevenRightThree" className="panel-collapse collapse in">
                            <div className="panel-body">
                            Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
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

export default FaqContent;