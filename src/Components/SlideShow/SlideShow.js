import React, { Component } from 'react';
import './SlideShow.css';

class SlideShow extends Component {
    constructor(props){
        super(props);
        
        this.slideImagesArray = React.Children.toArray(this.props.children);
        
        
    }   
    
    componentDidMount(){
        const slideContainer = document.querySelector("SlideContainer");
    }
    
   
    render() {        
        return(
            <div className="SlideShow">
                <button className="ArrowLeft  Button" ></button>
                <button className="ArrowRight Button" ></button>
                <div className="SlideContainer">
                    {this.slideImagesArray}
                </div>                              
            </div>
        );
    }
}
export default SlideShow;