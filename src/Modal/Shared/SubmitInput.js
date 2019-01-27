import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Inputs.css'

class SubmitInput extends Component {
    render() {
        return (
            <input type="submit" value={this.props.text} className="SubmitInput Input" />
        );
    }
}

SubmitInput.propTypes = {    
    text: PropTypes.string.isRequired
}

export default SubmitInput