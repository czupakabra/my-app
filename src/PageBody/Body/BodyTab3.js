import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab3.css';

import ItemList from '../../Components/ItemList/ItemList'

class BodyTab3 extends Component {
    render() {
        return (
            <section id="BodyTab3" className="BodyTab BodyTab3">
                <ItemList />
            </section>
        );
    }
}

export default BodyTab3;