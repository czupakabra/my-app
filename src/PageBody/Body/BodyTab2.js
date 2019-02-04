import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab2.css';

import ItemSelector from '../../Components/ItemSelector/ItemSelector'

class BodyTab2 extends Component {
    constructor(props){
        super(props);

        this.itemsArr = ['option1','option2','option3','option4','option5']
    }
    render() {        
        return (
            <section id="BodyTab2" className="BodyTab">
                <ItemSelector itemsSource={this.itemsArr}/>
            </section>
        );       
    }
}

export default BodyTab2;