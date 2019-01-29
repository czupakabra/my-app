import React, { Component } from 'react';
import './Menu.css';

import MenuItem from '../Shared/MenuItem'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.menuBody = [];

        if (typeof props.menuItems !== "undefined")
            this.menuItems = props.menuItems;
        else
            this.menuItems = "No Menu Items";  
            
        this.createMenu();
    }    

    createMenu() {
        if (Array.isArray(this.menuItems)) {
            for (let i = 0; i < this.menuItems.length; i++)
                this.menuBody.push(<MenuItem key={"MenutItemIndex-"+i} text={this.menuItems[i]} onClick={function () { this.props.tabSwitch(i+1)}.bind(this) } />);
        }
    }    

    render() {        
        return (
            <div className="menu left">
                <ul>
                    {this.menuBody}
                </ul>
            </div>
        );
    }
}

export default Menu;