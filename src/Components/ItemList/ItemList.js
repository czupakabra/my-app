import React, { Component } from 'react';
import './ItemList.css';

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };

        this._onSubmit = this._onSubmit.bind(this);
        this._removeItem = this._removeItem.bind(this);
        this._removeAllItem = this._removeAllItem.bind(this);
    }

    _onSubmit(e) {
        e.preventDefault();
        let temp = this.state.items;
        temp.push({ text: e.target.children[0].children[0].value });
        e.target.children[0].children[0].value = "";
        this.setState({ items: temp });
    }
    _removeItem(index) {
        return function () {
            let temp = this.state.items;
            temp.splice(index, 1);
            this.setState({ items: temp });
        }.bind(this);
    }
    _removeAllItem() {
        this.setState({ items: [] });
    }

    _generateList() {
        let temp = [];
        for (let i = 0; i < this.state.items.length; i++) {
            temp.push(
                <div key={'ItemListItem_' + i} className="Item">
                    <div className="ItemText">
                        <span>{this.state.items[i].text}</span>
                    </div>
                    <div className="ItemButton">
                        <button onClick={this._removeItem(i)}>Remove</button>
                    </div>
                </div>
            );
            if (i < this.state.items.length - 1)
                temp.push(<hr key={'itemListHr_' + i} />);
        }
        return temp;
    }

    render() {
        const items = this._generateList();
        let removeAll = null;
        if (this.state.items.length > 1) {
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
                            <input type="text" name={this.props.name} className="ItemListTextInput Inputs" />
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

export default ItemList;