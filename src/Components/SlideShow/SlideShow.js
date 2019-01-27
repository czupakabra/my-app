import React, { Component } from 'react';
import './SlideShow.css';

class SlideShow extends Component {
    constructor(props){
        super(props);
    }
    render() {        
        return(
            <div className="SlideShow">
                <button className="ArrowLeft  Button"></button>
                <button className="ArrowRight Button"></button>
            </div>
        );        
    }
}

export default SlideShow;