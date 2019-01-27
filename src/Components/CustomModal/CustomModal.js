import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './CustomModal.css';

import CloseIcon from './Icon/close.png'

class CustomModal extends Component {    
    render() {
        if (this.props.visibility) {
            return ( ReactDOM.createPortal(
                <aside className="ModalOuter">
                    <section className="Modal">
                        <div className="CloseIcon" onClick={this.props.onClose}>
                            <img src={CloseIcon} alt="CloseIcon"/>
                        </div>
                        {this.props.children}
                    </section>
                </aside>,
                document.getElementById('modalRoot'))                           
            );
        }
        else {
            return null;
        }
    }
}

CustomModal.propTypes = {
    visibility: PropTypes.bool.isRequired,    
}

export default CustomModal;