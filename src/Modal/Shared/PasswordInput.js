import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Inputs.css'

class PasswordInput extends Component {
    render() {
        return (
            <label className="TextInput">
                {this.props.labelText}
                <input type="password" name={this.props.name } className="Input"/>
            </label>
        );
    }
}

PasswordInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default PasswordInput