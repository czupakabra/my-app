import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab2.css';

import ItemSelector from '../../Components/ItemSelector/ItemSelector'

class BodyTab2 extends Component {
    constructor(props){
        super(props);

        this.itemsArr = ['option1','option2','option3','option4','option5'];
        
        this._selectorHendle = this._selectorHendle.bind(this);
    }

    _selectorHendle(selectedItems){
        console.log('Selected Items: ');
        console.log(selectedItems);
    }

    render() {        
        return (
            <section id="BodyTab2" className="BodyTab">
                <ItemSelector itemsSource={this.itemsArr} handle={this._selectorHendle} />
            </section>
        );       
    }
}

export default BodyTab2;