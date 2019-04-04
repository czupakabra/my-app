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
        this.props.addItem({ text: e.target.children[0].children[0].value });
        e.target.children[0].children[0].value = "";
    }
    _removeItem(index) {
        return function () {
            this.props.removeItem(index);
        }.bind(this);
    }
    _removeAllItem() {
        this.props.removeAllItem();
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
        //console.log("props items");
        //console.log(this.props.items);
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
       items: state.ItemList.items
    });
}
function mapDispatchToProps(dispatch) {
    return ({
        addItem: function(itemToAdd){            
            dispatch({type: "ADD", item: itemToAdd})
        },
        removeItem: function(itemIndexToRemove){
            dispatch({type: "REMOVE", index: itemIndexToRemove});
        },
        removeAllItem: function(){
            dispatch({type: "REMOVE_ALL"});
        }        
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);