import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LoginModal.css';

import TextInput from './Shared/TextInput'
import PasswordInput from './Shared/PasswordInput'
import SubmitInput from './Shared/SubmitInput'

class LoginModal extends Component {
    render() {
        if (this.props.visibility) {
            return (ReactDOM.createPortal(
                <aside className="ModalOuter">
                    <section className="LoginModal">
                        <div className="LoginModalHead">
                            <p>LOGOWANIE</p>
                            <span onClick={this.props.closeModal}><p>X</p></span>
                        </div>
                        <div className="LoginModalContent">
                            <form>
                                <TextInput labelText="Login" name="login" />
                                <PasswordInput labelText="Password" name="password" />
                                <SubmitInput text="Submit" />
                            </form>
                        </div>
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

export default LoginModal;