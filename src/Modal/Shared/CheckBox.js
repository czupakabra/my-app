import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Inputs.css'

class CheckBox extends Component {
    render() {
        return (
            <label className="TextInput">                
                <input type="checkbox" />
                <span className="CustomCheckBox"></span>
                <span className="CustomCheckBoxText">{this.props.labelText}</span>
            </label>
        );
    }
}

CheckBox.propTypes = {
    labelText: PropTypes.string.isRequired,
    //name: PropTypes.string.isRequired
}

export default CheckBox