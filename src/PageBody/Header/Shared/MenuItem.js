import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  constructor(props){
    super(props);
    if(typeof props.text !== "undefined")
        this.text = props.text;
    else
        this.text = "Menu Item";

    if( typeof props.onClick == "function")
        this.onClick = props.onClick;
    else
        this.onClick = function(){}
    
    this.key = props.itemKey;        
  }

  render() {
    return (
        <li className="MenuItem" >
            <div onClick={this.onClick}>{this.text}</div>
        </li>
    );
  }
}

export default MenuItem;