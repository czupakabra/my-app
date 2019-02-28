import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    constructor(props){
        super(props);

        this.itemRef = React.createRef();
        this.isChecked = false;

        this._hendleClick = this._hendleClick.bind(this);
    }

    _hendleClick(){
        this.isChecked = !this.isChecked;
        if(this.isChecked){
            this.itemRef.current.style.background = 'gray';
        }else{
            this.itemRef.current.style.background = 'green';
        }

        this.props.onClick(this.props.index, this.isChecked) ;
    }
    render() {
        return (
            <div ref={this.itemRef} id="Item" className="Item" onClick={this._hendleClick}>
                {this.props.text}
            </div>                         
        );
    }
}

export default Item;