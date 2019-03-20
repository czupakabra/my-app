import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab2.css';

import ItemSelector from '../../Components/ItemSelector/ItemSelector';

class BodyTab2 extends Component {
    constructor(props){
        super(props);
        this.state = { audioList: null };

        this.itemsArr = ['Option 1','Option 2','Option 3', 'Option 4','Option 5','Option 6','Option 7','Option 8','Option 9','Option 10'];
    }

    _selectorHendle(selectedItems){
        console.log(selectedItems);
    }

    render() {
        return (
            <section id="BodyTab2" className="BodyTab">
                               
                <section className="ItemSelectorCotainer">
                    <ItemSelector itemsSource={this.itemsArr} handle={this._selectorHendle} />
                </section>
            </section>
        );
    }
}

export default BodyTab2;