import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Inputs.css'

class TextInput extends Component {
    render() {
        return (
            <label className="TextInput">
                {this.props.labelText}
                <input type="text" name={this.props.name} className="Input"/>
            </label>
        );
    }
}

TextInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default TextInput