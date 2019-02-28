import React, { Component } from 'react';
import './PlayList.css';

import PlayListItem from './PlayListItem';

class PlayList extends Component {
    constructor(props){
        super(props);

        this.playListItems = [];
        this._onClickItem = this._onClickItem.bind(this);
    }
    _onClickItem(index){
        this.props.selectedItemIndex(index);
    }
    _generatePlaylist(){
        this.playListItems = this.props.titles.map(function(val, i){ return(<PlayListItem key={'PlayListItem'+i} title={val} index={i} onClick={this._onClickItem}/>);}.bind(this));
    }    
    render() {
        this._generatePlaylist();
        return (
            <div className="Playlist">
                {this.playListItems}
            </div>                         
        );
    }
}

export default PlayList;