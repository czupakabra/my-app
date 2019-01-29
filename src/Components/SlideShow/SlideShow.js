import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './SlideShow.css';

class SlideShow extends Component {
    constructor(props){
        super(props);

        this.slide = null;
        this.images = null;
        this.slideValue = [];
        this.currentSlide = 0;

        this._nextSlide = this._nextSlide.bind(this);
        this._prevSlide = this._prevSlide.bind(this);
    }

    componentDidMount(){
        this.slideCotainer = ReactDOM.findDOMNode(this).querySelector('.SlideContainer');
        this.slide = ReactDOM.findDOMNode(this).querySelector('.Slide');
        this.images = ReactDOM.findDOMNode(this).querySelectorAll('img');

        for(let i=0; i < this.images.length; i++){
            this.images[i].width = this.slideCotainer.clientWidth;
            this.images[i].height = this.slideCotainer.clientHeight;
            this.slideValue.push(this.slideCotainer.clientWidth * i);
        }
        //const newWidth = (images[0].clientWidth * images.length) + 'px';
        //this.slide.style.width = newWidth;
    }
   
    _nextSlide(){
        console.log(this.slide.style.left);     
        if(this.currentSlide < this.images.length-1){
            this.currentSlide++;            
            this.slide.style.left = -this.slideValue[this.currentSlide] + 'px';            
        }
        console.log(this.slide.style.left);        
    }
    _prevSlide(){
        console.log(this.slide.style.left);            
        if(this.currentSlide > 0){
            this.currentSlide--;            
            this.slide.style.left = -this.slideValue[this.currentSlide] + 'px';
        }
        console.log(this.slide.style.left);
    }

    render() {
        return(
            <div className="SlideShow">
                <button className="ArrowLeft  Button" onClick={this._prevSlide}></button>
                <button className="ArrowRight Button" onClick={this._nextSlide}></button>
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