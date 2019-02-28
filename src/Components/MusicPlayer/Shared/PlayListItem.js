import React, { Component } from 'react';
import './PlayListItem.css';

import Icon from '../Icon/audio.png'

class PlayListItem extends Component {
    constructor(props){
        super(props);

        this._onClick = this._onClick.bind(this);
    }
    _onClick(){
        this.props.onClick(this.props.index);
    }
    render() {
        return (
            <div className="PlayListItem" onClick={this._onClick}>
                <div className="Icon">
                    <img src={Icon} alt="icon" />
                </div>
                <div className="Text">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default PlayListItem;