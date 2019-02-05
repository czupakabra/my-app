import React, { Component } from 'react';
import './ItemSelector.css';

import ItemV2 from './Shared/ItemV2';

class ItemSelector extends Component {
    constructor(props){
        super(props);

        this.allItems = this.props.itemsSource;
        this.state = {
            checked: this.allItems.map(function(){return false})
        };

        this.leftCotainerItemms = new Array(this.allItems.length);

        this._moveToRight = this._moveToRight.bind(this);
        this._moveToLeft  = this._moveToLeft.bind(this);
        this._changeItemState = this._changeItemState.bind(this);
        this._returnSelection = this._returnSelection.bind(this);

        this._generateAllItemsList();
    }
    
    _returnSelection(){
        const temp = this.allItems.filter(function(el, i, arr){return this.state.checked[i]}.bind(this));
        this.props.handle(temp);
    }

    _generateAllItemsList(){
        if (Array.isArray(this.allItems)) {
            for (let i = 0; i < this.allItems.length; i++){
                this.leftCotainerItemms[i] = (<ItemV2 key={"ItemSelectorIndex_"+i} index={i}  text={this.allItems[i]} checked={this.state.checked[i]} onStatusChange={this._changeItemState}/>);                
            }               
        }        
    }    
    _changeItemState(index){              
        let temp = this.state.checked;               
        temp[index] = !this.state.checked[index];        
        this.setState({checked: temp});
        this.leftCotainerItemms[index] = (<ItemV2 key={"ItemSelectorIndex_"+index} index={index}  text={this.allItems[index]} checked={this.state.checked[index]} onStatusChange={this._changeItemState}/>);
    }

    _moveToRight(){
        this._returnSelection();                
    }
    _moveToLeft(){

    }
    render() {
        return (
            <section id="ItemSelector" className="ItemSelector">
                <div className="LeftSideContainer">
                    {this.leftCotainerItemms}
                </div>
                <div className="ArrowsContainer">
                    <button onClick={this._moveToRight}><img src={require("./Icon/ArrowRight.png")} alt="ArrowLeft" width="50px" height="50px"/></button>
                    <button onClick={this._moveToLeft}><img src={require("./Icon/ArrowLeft.png" )} alt="ArrowLeft" width="50px" height="50px"/></button>
                </div>
                <div className="RightSideContainer">
                    {this.leftCotainerItemms}
                </div>
            </section>
        );
    }
}

export default ItemSelector;