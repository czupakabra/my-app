import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab4.css';

import LikeDislike from '../../Components/LikeDislike/LikeDislike';

class BodyTab4 extends Component {
    render() {
        return (
            <section id="BodyTab4" className="BodyTab BodyTab4">
                <section className="PlayerContainer">
                    <LikeDislike />
                </section>                
            </section>
        );
    }
}

export default BodyTab4;