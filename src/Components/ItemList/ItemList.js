import React, { Component } from 'react';
import './ItemList.css';

import { connect } from 'react-redux';

class ItemList extends Component {
    constructor(props) {
        super(props);       

        this._onSubmit = this._onSubmit.bind(this);
        this._removeItem = this._removeItem.bind(this);
        this._removeAllItem = this._removeAllItem.bind(this);
    }

    _onSubmit(e) {
        e.preventDefault();
        console.log("props items");
        console.log(this.props.items);
        this.props.addItem({ text: e.target.children[0].children[0].value });
        let temp = this.props.items;
        //temp.push({ text: e.target.children[0].children[0].value });
        e.target.children[0].children[0].value = "";        
        //this.props.addItem(temp);
    }
    _removeItem(index) {
        return function () {
            let temp = this.props.items;
            temp.splice(index, 1);            
        }.bind(this);
    }
    _removeAllItem() {
        this.setState({ items: [] });
    }

    _generateList() {
        let temp = [];
        for (let i = 0; i < this.props.items.length; i++) {
            temp.push(
                <div key={'ItemListItem_' + i} className="Item">
                    <div className="ItemText">
                        <span>{this.props.items[i].text}</span>
                    </div>
                    <div className="ItemButton">
                        <button onClick={this._removeItem(i)}>Remove</button>
                    </div>
                </div>
            );
            if (i < this.props.items.length - 1)
                temp.push(<hr key={'itemListHr_' + i} />);
        }       
        return temp;
    }

    render() {
        console.log("props items");
        console.log(this.props.items);
        const items = this._generateList();
        let removeAll = null;
        if (this.props.items.length > 1) {
            removeAll = (
            <div className="ItemListFooter">
                <button onClick={this._removeAllItem}>Remove All</button>
            </div>);
        }    

        return (
            <div id="ItemList" className="ItemList" >
                <div className="ItemListHeader">
                    <form onSubmit={this._onSubmit}>
                        <label className="ItemListTextInputLabel">
                            <input type="text"  className="ItemListTextInput Inputs" />
                        </label>
                        <input type="submit" value="submit" className="ItemListSubmit Inputs" />
                    </form>
                </div>
                <div className="ItemListBody">
                    {items}
                </div>
                {removeAll}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return ({
       items: state.items
    });
}


function addItem(){
    console.log("działa akcja");
}
function mapDispatchToProps(dispatch) {
    return ({
        addItem: function(itemsProp){            
            dispatch({type: "ADD", item: itemsProp})
        },
        removeItem: function(){
            dispatch({type: "REMOVE"});
        }        
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);