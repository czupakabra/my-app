import React, { Component } from 'react';
import './Item.css';

class ItemV2 extends Component {
    constructor(props){
        super(props);
        this._hendleClick = this._hendleClick.bind(this);
    }
    _hendleClick(){        
        this.props.onStatusChange(this.props.index);
    }
    render() {
        return (
            <div className="ItemRoot"> 
                <input id={"Item"+this.props.index} type="checkbox"  checked={this.props.checked} onChange={this._hendleClick} />
                <label className="ItemV2" htmlFor={"Item"+this.props.index}>
                    <div className=".ItemText">
                        {this.props.text}
                    </div>
                </label>
            </div>
        );
    }
}

export default ItemV2;