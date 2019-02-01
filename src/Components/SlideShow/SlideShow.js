import React, { Component } from 'react';
import './SlideShow.css';

class SlideShow extends Component {
    constructor(props){
        super(props);       
        
        this.slideOffsetValue = [];
        this.currentSlide = 0;
        this.propsChildren = this.props.children;        

        this.slideRef = React.createRef();
        this.root = React.createRef();        

        this._mapChildImages = this._mapChildImages.bind(this);

        this._nextSlide = this._nextSlide.bind(this);
        this._prevSlide = this._prevSlide.bind(this);
    }  

    _mapChildImages(x, y){
        console.log(x);      
        return function(child){ return React.cloneElement(child, { width: x, height: y })};        
    }
    
    componentDidMount(){
        console.log(this.root.current.clientWidth);      
        this.propsChildren =  React.Children.map(this.props.children, this._mapChildImages(this.root.current.clientWidth, this.root.current.clientHeight));

        for(let i=0; i < this.propsChildren.length; i++){
            this.slideOffsetValue.push(this.root.current.clientWidth * i);
        } 
        this.forceUpdate();    
    }
   
    _nextSlide(){
        if(this.currentSlide < this.propsChildren.length-1){
            this.currentSlide++;
            this.slideRef.current.style.transform = `translateX(${-this.slideOffsetValue[this.currentSlide]}px)`;
        }                
    }
    _prevSlide(){
        if(this.currentSlide > 0){
            this.currentSlide--;
            this.slideRef.current.style.transform = `translateX(${-this.slideOffsetValue[this.currentSlide]}px)`;
        }        
    }

    render() {
        return(
            <div className="SlideShow" ref={this.root}>
                <button className="ArrowLeft  Button" onClick={this._prevSlide}></button>
                <button className="ArrowRight Button" onClick={this._nextSlide}></button>
                <div className="DotsOuter">
                    <div className="DotsContainer">
                        <img src={require("./Icon/Circle.png")} alt="circle" width="30px" height="30px" />
                        <img src={require("./Icon/Circle.png")} alt="circle" width="30px" height="30px" />
                        <img src={require("./Icon/Circle.png")} alt="circle" width="30px" height="30px" />
                        <img src={require("./Icon/Circle.png")} alt="circle" width="30px" height="30px" />
                    </div>
                </div>
                <div className="SlideContainer">
                    <div className="Slide" ref={this.slideRef}>
                        {this.propsChildren}
                    </div>
                </div>
            </div>
        );
    }
}
export default SlideShow;