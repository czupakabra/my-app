import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab1.css';

import SlideShow from '../../Components/SlideShow/SlideShow'

class BodyTab1 extends Component {
    render() {        
        return (
            <section id="BodyTab1" className="BodyTab">
                <section id="SlideShow" className="SlideShowContainer">
                    <SlideShow />
                </section>
            </section>
        );       
    }
}

export default BodyTab1;