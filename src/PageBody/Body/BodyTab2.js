import React, { Component } from 'react';
import './BodyTabs.css';
import './BodyTab2.css';

import { connect } from 'react-redux';

class BodyTab2 extends Component {
    render() {
        return (
            <section id="BodyTab2" className="BodyTab">
                <div className="outer">
                    <div className="counter">
                        <h1>Counter: <span id="counter">{this.props.counter}</span></h1>
                    </div>
                    <div className="button">
                        <div className="leftBtn">
                            <button id="increment" onClick={this.props.incrementCounter}>Increment</button>
                        </div>
                        <div className="rightBtn">
                            <button id="decrement" onClick={this.props.decrementCounter}>Decrement</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

//function incrementAction() { console.log("INCREMENT"); return ({ type: "INCREMENT" }); }
function decrementAction() { return { type: "DECREMENT" }; }

function mapStateToProps(state) {
    return ({
        counter: state.counter
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        incrementCounter: function () { dispatch({ type: "INCREMENT" }) },
        decrementCounter: decrementAction
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyTab2);