import React, { Component } from 'react';
import './ItemSelector.css';

import ItemV2 from './Shared/ItemV2';

class ItemSelector extends Component {
    constructor(props) {
        super(props);

        this.allItems = this.props.itemsSource;
        this.state = {
            checked: this.allItems.map(function () { return false })
        };

        this.itemContainer = new Array(this.allItems.length);

        this._selectAll = this._selectAll.bind(this);
        this._deselectAll = this._deselectAll.bind(this);
        this._changeItemState = this._changeItemState.bind(this);
        this._returnSelection = this._returnSelection.bind(this);

        this._generateAllItemsList();
    }
    _returnSelection() {
        const temp = this.allItems.filter(function (el, i, arr) { return this.state.checked[i] }.bind(this));
        if (temp.length > 0)
            this.props.handle(temp);
        else
            this.props.handle(null);
    }
    _generateAllItemsList() {
        if (Array.isArray(this.allItems)) {
            for (let i = 0; i < this.allItems.length; i++) {
                this.itemContainer[i] = (<ItemV2 key={"ItemSelectorIndex_" + i} index={i} text={this.allItems[i]} checked={this.state.checked[i]} onStatusChange={this._changeItemState} />);
            }
        }
    }
    _changeItemState(index) {
        let temp = this.state.checked;
        temp[index] = !this.state.checked[index];
        this.setState({ checked: temp }, function () { this._returnSelection(); }.bind(this));
    }
    _selectAll() {
        let temp = this.state.checked;
        temp = temp.map(function () { return true });
        this.setState({ checked: temp }, function () { this._returnSelection(); }.bind(this));
    }
    _deselectAll() {
        let temp = this.state.checked;
        temp = temp.map(function () { return false });
        this.setState({ checked: temp }, function () { this._returnSelection(); }.bind(this));
    }
    render() {
        //this._returnSelection();
        this._generateAllItemsList();
        return (
            <div id="ItemSelector" className="ItemSelector">
                <div className="LeftSideContainer">
                    <div className="ListHeader">
                        <span>Available</span>
                    </div>
                    <div className="ListBody">
                        {this.itemContainer}
                    </div>
                </div>
                <div className="ArrowsContainer">
                    <button onClick={this._selectAll}>Select All</button>
                    <button onClick={this._deselectAll}>Deselect All</button>
                </div>
                <div className="RightSideContainer">
                    <div className="ListHeader">
                        <span>Selected</span>
                    </div>
                    <div className="ListBody">
                        {this.itemContainer}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSelector;