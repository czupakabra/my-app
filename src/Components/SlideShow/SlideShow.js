import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './SlideShow.css';

class SlideShow extends Component {
    constructor(props) {
        super(props);

        this.slide = null;
        this.images = null;
        this.slideValue = [];
        this.currentSlide = 0; 

        this.dots = this._createDots();        

        this._nextSlide = this._nextSlide.bind(this);
        this._prevSlide = this._prevSlide.bind(this);
    }    
    _createDots(){
        let dotsArr = [];
        for(let i=0; i<React.Children.count(this.props.children); i++){
            dotsArr.push(React.createElement('img', {src: require("./Icon/Circle.png"), width: "30px", height: "30px", key: "dotNav"+i}));
        }
        return dotsArr;
    }
    _nextSlide() {
             
        if (this.currentSlide < this.images.length - 1) {
            this.dotsNav[this.currentSlide].src = require("./Icon/Circle.png");
            this.currentSlide++;
            this.slide.style.left = -this.slideValue[this.currentSlide] + 'px';
            this.dotsNav[this.currentSlide].src = require("./Icon/CircleFill.png");
        }        
    }
    _prevSlide() {        
        if (this.currentSlide > 0) {
            this.dotsNav[this.currentSlide].src = require("./Icon/Circle.png");
            this.currentSlide--;
            this.slide.style.left = -this.slideValue[this.currentSlide] + 'px';
            this.dotsNav[this.currentSlide].src = require("./Icon/CircleFill.png");
        }        
    }
    componentDidMount() {
        this.slideCotainer = ReactDOM.findDOMNode(this).querySelector('.SlideContainer');
        this.slide = ReactDOM.findDOMNode(this).querySelector('.Slide');
        this.images = ReactDOM.findDOMNode(this).querySelectorAll('div.Slide img');        
        this.dotsNav = ReactDOM.findDOMNode(this).querySelectorAll('div.DotsContainer img');
        
        this.dotsNav[0].src = require("./Icon/CircleFill.png");

        for (let i = 0; i < this.images.length; i++) {
            this.images[i].width = this.slideCotainer.clientWidth;
            this.images[i].height = this.slideCotainer.clientHeight;
            this.slideValue.push(this.slideCotainer.clientWidth * i);
        }
    }
    render() {
        return (
            <div className="SlideShow">
                <button className="ArrowLeft  Button" onClick={this._prevSlide}></button>
                <button className="ArrowRight Button" onClick={this._nextSlide}></button>
                <div className="DotsOuter">
                    <div className="DotsContainer">
                        {this.dots}
                    </div>
                </div>
                <div className="SlideContainer">
                    <div className="Slide">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
export default SlideShow;