import React, { Component } from 'react';
import './Item.css';

class ItemV2 extends Component {
    constructor(props){
        super(props);  
        this._hendleClick = this._hendleClick.bind(this);
    }

    _hendleClick(){
        console.log('props checked: ' + this.props.checked);
        this.props.onStatusChange(this.props.index);
    }
    render() {
        return (
            <div className="ItemV2">                 
                <label className="ItemV2" > 
                 <input type="checkbox"  checked={this.props.checked} onChange={this._hendleClick} />
                    <div className=".ItemText">
                        {this.props.text}
                    </div>
                </label>
            </div>
        );
    }
}

export default ItemV2;