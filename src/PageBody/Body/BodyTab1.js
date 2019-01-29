import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab1.css';

import SlideShow from '../../Components/SlideShow/SlideShow'

class BodyTab1 extends Component {
    render() {
        return (
            <section id="BodyTab1" className="BodyTab">
                <section id="SlideShow" className="SlideShowContainer">
                    <SlideShow>
                        <img src={require("../../Image/SlideShow1/ridwan-chandra-choa-archer-001a.jpg")} alt="image1" />
                        <img src={require("../../Image/SlideShow1/ridwan-chandra-choa-archer-002a.jpg")} alt="image2" />
                        <img src={require("../../Image/SlideShow1/ridwan-chandra-choa-archer-003a.jpg")} alt="image3" />
                    </SlideShow>
                </section>

                <section id="SlideShow" className="SlideShowContainer2">
                    <SlideShow>
                        <img src={require("../../Image/SlideShow2/1.jpg")} alt="image1" />
                        <img src={require("../../Image/SlideShow2/2.jpg")} alt="image2" />
                        <img src={require("../../Image/SlideShow2/3.jpg")} alt="image3" />
                        <img src={require("../../Image/SlideShow2/4.jpg")} alt="image4" />
                        <img src={require("../../Image/SlideShow2/5.jpg")} alt="image5" />
                    </SlideShow>
                </section>  
            </section>                         
        );
    }
}

export default BodyTab1;