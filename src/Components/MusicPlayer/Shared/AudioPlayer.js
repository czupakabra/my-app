import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AudioPlayer.css';

import playIcon from '../Icon/play.png';
import pauseIcon from '../Icon/pause.png';
import repeatIcon from '../Icon/repeat.png';
import previousIcon from '../Icon/previous.png';
import skipIcon from '../Icon/skip.png';
import speakerIcon from '../Icon/speaker.png';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            audio: new Audio(),
            isPlaying: false,
            isLoop: false,
            currentAudioDuration: 0,
            currentAudioIndex: 0
        };
        this.sliderRef = React.createRef();

        this.audio = new Audio();
        console.log('audio src ' + this.audio.src);
        this._audioMetaData = this._audioMetaData.bind(this);
        this._audioOnTimeUpdate = this._audioOnTimeUpdate.bind(this);
        this._audioOnEnded = this._audioOnEnded.bind(this);
        this.audio.onloadedmetadata = this._audioMetaData;
        this.audio.ontimeupdate = this._audioOnTimeUpdate;
        this.audio.onended = this._audioOnEnded; 

        this._play = this._play.bind(this);
        this._pause = this._pause.bind(this);
        this._nextAudio = this._nextAudio.bind(this);
        this._prevAudio = this._prevAudio.bind(this);
        this._setCurrentAudio = this._setCurrentAudio.bind(this);
        this._switchCurrentAudio = this._switchCurrentAudio.bind(this);
        this._rangeOnChange = this._rangeOnChange.bind(this);

        this._setCurrentAudio();
        console.log('state current index: '+this.state.currentAudioIndex);
    }
    _audioMetaData(audio) {              
        this.setState({currentAudioDuration: Math.ceil(audio.target.duration)});
        console.log('meta: ');
        console.log(audio.target);
    }
    _audioOnTimeUpdate(audio) {
        if(this.sliderRef.current !== null){
            this.sliderRef.current.value = audio.target.currentTime;
        }                
    }
    _audioOnEnded(){
        this.sliderRef.current.value = 0;
        this._nextAudio();
        //this.setState({ isPlaying: false });        
    }

    _setCurrentAudio() {
        if (this.props.audioList.length !== 0 && this.state.currentAudioIndex >= 0 && this.state.currentAudioIndex < this.props.audioList.length) {
            this.audio.src = require('../../../Music/' + this.props.audioList[this.state.currentAudioIndex] + '.mp3');
        }
    }
    _switchCurrentAudio() {
        if(this.state.currentAudioIndex >= 0 && this.state.currentAudioIndex < this.props.audioList.length){
            this.audio.pause();
            this._setCurrentAudio();
            this.audio.play();
        }        
    }
    _isNowPlaying() {
        if (!this.state.isPlaying)
            this.playPauseButton = (<button onClick={this._play} ><img src={playIcon} alt="play" /></button>);
        else
            this.playPauseButton = (<button onClick={this._pause}><img src={pauseIcon} alt="pause" /></button>);
    }
    _play() {
        //console.log("playu");
        //console.log(this.audio.src);
        //this._setCurrentAudio();
        this.audio.play();
        this.setState({ isPlaying: true });
    }
    _pause() {
        this.audio.pause();
        this.setState({ isPlaying: false });
    }
    _nextAudio() {
        console.log('state current index: '+this.state.currentAudioIndex);
        console.log('audio lis lenght: '+this.props.audioList.length);
        console.log('audio title: '+this.props.audioList[this.state.currentAudioIndex]);
        if (this.state.currentAudioIndex >= 0 && this.state.currentAudioIndex < this.props.audioList.length) {            
            this.setState({ currentAudioIndex: this.state.currentAudioIndex + 1 }, function () { this._switchCurrentAudio(); }.bind(this));
        }
        else if(this.state.currentAudioIndex >= this.props.audioList.length){
            this.setState({ currentAudioIndex: 0 }, function () { this._switchCurrentAudio(); }.bind(this));
        }
    }
    _prevAudio() {
        if (this.state.currentAudioIndex !== 0 && this.state.currentAudioIndex > 0) {
            this.setState({ currentAudioIndex: this.state.currentAudioIndex - 1 }, function () { this._switchCurrentAudio(); }.bind(this));
        }
    }
    _rangeOnChange(e) {
        console.log("value: " + e.target.value);
        this.audio.currentTime = e.target.value;        
    }
    render() {
        this._isNowPlaying();        
        return (
            <section id="AudioPlayer" className="AudioPlayer">
                <div className="buttonsContainer">
                    <div className="buttonsContainerCenter">
                        <button><img src={repeatIcon} alt="repeat" /></button>
                        <button onClick={this._prevAudio}><img src={previousIcon} alt="previous" /></button>
                        {this.playPauseButton}
                        <button onClick={this._nextAudio}><img src={skipIcon} alt="skip" /></button>
                        <button><img src={speakerIcon} alt="speaker" /></button>
                    </div>
                </div>
                <div className="rangeSliderCotainer">
                    <input ref={this.sliderRef} type="range" min="0" max={this.state.currentAudioDuration} defaultValue={0} onChange={this._rangeOnChange} className="rangeSlider" />
                </div>
            </section>
        );
    }    
    componentWillUnmount(){
        this.audio.pause();
    }
    componentDidUpdate(prevProps){        
        if(this.props.selectedAudioIndex !== prevProps.selectedAudioIndex){
            this.setState({currentAudioIndex: this.props.selectedAudioIndex}, function () { this._switchCurrentAudio(); }.bind(this));
        }
    }
}

AudioPlayer.defaultProps  = {
    audioList: []
}
AudioPlayer.propTypes  = {
    audioList: PropTypes.arrayOf(PropTypes.string)
}

export default AudioPlayer;