import React, { Component } from 'react';
import './MusicPlayer.css';

import AudioPlayer from './Shared/AudioPlayer';
import PlayList    from './Shared/PlayList';

class MusicPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {selectedAudioIndex: 0};

        this.titleArr = ['Leona_Lewis_My_Hands', 'Garbage_Not_Your_Kind_of_People', 'RagnBone_Man_Human'];

        this._selectedAudioIndex = this._selectedAudioIndex.bind(this);
    }

    _selectedAudioIndex(index){
        this.setState({selectedAudioIndex: index});
        console.log('item index: ' + index);
    }

    render() {
        return (
            <div className="MusicPlayerContainer">                
                <div className="PlayerCotainer">
                    <div className="AudioPlayerContainer">
                        <AudioPlayer audioList={this.titleArr} selectedAudioIndex={this.state.selectedAudioIndex}/>
                    </div>
                    <div className="PlaylistContainer">
                        <PlayList titles={this.titleArr} selectedItemIndex={this._selectedAudioIndex} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicPlayer;