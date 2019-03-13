import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AudioPlayer.css';

import playIcon from '../Icon/play.png';
import pauseIcon from '../Icon/pause.png';
import loopIcon from '../Icon/repeat.png';
import previousIcon from '../Icon/previous.png';
import skipIcon from '../Icon/skip.png';
import speakerIcon from '../Icon/speaker.png';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            audio: new Audio(),
            isTimeUpdate: false,
            isLoop: false,
            currentAudioDuration: 0,
            currentAudioIndex: 0,
            currentAudioMin: '00',
            currentAudioSec: '00',            
        };
        this.durationSlideRef = React.createRef();        

        this.audio = new Audio();        
        this._audioMetaData = this._audioMetaData.bind(this);
        this._audioOnTimeUpdate = this._audioOnTimeUpdate.bind(this);
        this._audioOnEnded = this._audioOnEnded.bind(this);
        this._audioDurationChange = this._audioDurationChange.bind(this);
        this.audio.onloadedmetadata = this._audioMetaData;
        this.audio.ontimeupdate = this._audioOnTimeUpdate;
        this.audio.onended = this._audioOnEnded;
        this.audio.ondurationchange = this._audioDurationChange;        

        this._setCurrentAudio = this._setCurrentAudio.bind(this);
        this._switchCurrentAudio = this._switchCurrentAudio.bind(this);

        this._play = this._play.bind(this);
        this._pause = this._pause.bind(this);
        this._nextAudio = this._nextAudio.bind(this);
        this._prevAudio = this._prevAudio.bind(this);
        this._loopAudio = this._loopAudio.bind(this);
        
        this._rangeOnChange = this._rangeOnChange.bind(this);
        this._volumeRangeOnChange = this._volumeRangeOnChange.bind(this);

        this._setCurrentAudio();
        console.log('state current index: ' + this.state.currentAudioIndex);
    }

    //audio method
    _audioMetaData(audio) {
        this.setState({ currentAudioDuration: Math.ceil(audio.target.duration) });
        console.log('meta: ');
        console.log(audio.target);
    }
    _audioOnTimeUpdate(audio) {
        if (this.durationSlideRef.current !== null) {
            this.durationSlideRef.current.value = audio.target.currentTime;
        }

        let min = Math.floor(audio.target.currentTime / 60);
        let sec = Math.floor(audio.target.currentTime % 60);
        this.setState({currentAudioMin: ('00' + min).slice(-2), currentAudioSec: ('00' + sec).slice(-2)});
    }
    _audioOnEnded() {
        if (this.durationSlideRef.current !== null) {
            this.durationSlideRef.current.value = 0;
        }        
        if(this.state.isLoop)
            this._nextAudio();
        else{
            this.audio.pause();
            this.audio.currentTime = 0;
            this.setState({isTimeUpdate: false});
        }             
    }
    _audioDurationChange(duration){
        console.log("duration change");
    }    

    _setCurrentAudio() {
        if (this.props.audioList.length !== 0 && this.state.currentAudioIndex >= 0 && this.state.currentAudioIndex < this.props.audioList.length) {
            this.audio.src = require('../../../Music/' + this.props.audioList[this.state.currentAudioIndex] + '.mp3');
        }        
    }    
    _switchCurrentAudio() {
        if (this.state.currentAudioIndex >= 0 && this.state.currentAudioIndex < this.props.audioList.length) {
            this.audio.pause();
            this._setCurrentAudio();
            if(this.state.isTimeUpdate)
                this.audio.play();
        }
    }

    //buttons method
    _play() {
        //console.log("playu");
        //console.log(this.audio.src);
        //this._setCurrentAudio();
        this.audio.play();
        this.setState({ isTimeUpdate: true });
    }
    _pause() {
        this.audio.pause();
        this.setState({ isTimeUpdate: false });
    }
    _nextAudio() {
        console.log('state current index: ' + this.state.currentAudioIndex);
        console.log('audio lis lenght: ' + this.props.audioList.length);
        console.log('audio title: ' + this.props.audioList[this.state.currentAudioIndex]);
        if (this.state.currentAudioIndex >= 0 && this.state.currentAudioIndex < this.props.audioList.length-1) {
            this.setState({ currentAudioIndex: this.state.currentAudioIndex + 1 }, function () { this._switchCurrentAudio(); }.bind(this));
        }
        else if (this.state.currentAudioIndex >= this.props.audioList.length) {
            this.setState({ currentAudioIndex: 0 }, function () { this._switchCurrentAudio(); }.bind(this));
        }
    }
    _prevAudio() {
        if (this.state.currentAudioIndex !== 0 && this.state.currentAudioIndex > 0) {
            this.setState({ currentAudioIndex: this.state.currentAudioIndex - 1 }, function () { this._switchCurrentAudio(); }.bind(this));
        }
    }
    _loopAudio(){
        this.setState({isLoop: !this.state.isLoop});
        console.log("loopAudio");
    }
    _volumeRangeOnChange(slide){
        this.audio.volume = slide.target.value;
    }
    _rangeOnChange(slide) {
        console.log("value: " + slide.target.value);
        this.audio.currentTime = slide.target.value;
    }
    

    // react life cycle
    render() {
        //this._isNowTimeUpdate();

        //check is TimeUpdate Audio
        let playPauseButton = null;
        if (!this.state.isTimeUpdate)
            playPauseButton = (<button onClick={this._play} ><img src={playIcon} alt="play" /></button>);
        else
            playPauseButton = (<button onClick={this._pause}><img src={pauseIcon} alt="pause" /></button>);

        //check is Loop Audio
        let loopButton = null;
        if (!this.state.isLoop)
            loopButton = (<button onClick={this._loopAudio}><img src={loopIcon} alt="repeat" /></button>);
        else
            loopButton = (<button onClick={this._loopAudio} className="SelectedButton"><img src={loopIcon} alt="repeat" /></button>);

        //set time for current audio
        const currentAudioLenghtMin = ('00' + Math.floor(this.audio.duration / 60)).slice(-2);
        const currentAudioLenghtSec = ('00' + Math.floor(this.audio.duration % 60)).slice(-2);

        return (
            <section id="AudioPlayer" className="AudioPlayer">
                <div className="PlayPauseButtonContainer">
                    {playPauseButton}
                </div>
                <div className="SlideButtonsContainer">
                    <div className="buttonsTitleContainer">
                        <div className="AlbumTitleContainer">
                            <div className="TitleContainer">
                                <div className="ContainerText">Title:</div>
                                <div className="ContainerProps">{this.props.tracksInfo[this.state.currentAudioIndex].title}</div>
                            </div>
                            <div className="ArtistContainer">
                                <div className="ContainerText">Artist:</div>
                                <div className="ContainerProps">{this.props.tracksInfo[this.state.currentAudioIndex].artist}</div>
                            </div>
                            <div className="AlbumContainer">
                                <div className="ContainerText">Album:</div>
                                <div className="ContainerProps">{this.props.tracksInfo[this.state.currentAudioIndex].album}</div>
                            </div>
                        </div>
                        <div className="buttonsContainer">
                            <div className="buttons">
                                {loopButton}
                                <button onClick={this._prevAudio}><img src={previousIcon} alt="previous" /></button>
                                <button onClick={this._nextAudio}><img src={skipIcon} alt="next" /></button>
                                <button><img src={speakerIcon} alt="speaker" /></button>
                                <div className="rangeSliderVolumeCotainer">
                                    <input type="range" min="0" defaultValue={1} max={1} step={0.01} onChange={this._volumeRangeOnChange} className="rangeSliderVolume" />
                                </div>
                            </div>
                            <div className="TimeCotainer">
                                <div className="CurrentTime">
                                    {this.state.currentAudioMin}:{this.state.currentAudioSec}/{currentAudioLenghtMin}:{currentAudioLenghtSec}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rangeSliderCotainer">
                        <input ref={this.durationSlideRef} type="range" min="0" max={this.state.currentAudioDuration} defaultValue={0} onChange={this._rangeOnChange} className="rangeSlider" />
                    </div>
                </div>
            </section>
        );
    }
    componentWillUnmount() {
        this.audio.pause();
    }
    componentDidUpdate(prevProps) {
        if (this.props.selectedAudioIndex !== prevProps.selectedAudioIndex) {
            this.setState({ currentAudioIndex: this.props.selectedAudioIndex }, function () { this._switchCurrentAudio(); }.bind(this));
        }
    }
}

AudioPlayer.defaultProps = {
    audioList: []
}
AudioPlayer.propTypes = {
    audioList: PropTypes.arrayOf(PropTypes.string)
}

export default AudioPlayer;