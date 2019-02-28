import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab4.css';

import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';

class BodyTab4 extends Component {
    render() {
        return (
            <section id="BodyTab4" className="BodyTab BodyTab4">
                <section className="PlayerContainer">
                    <MusicPlayer />
                </section>                
            </section>
        );
    }
}

export default BodyTab4;