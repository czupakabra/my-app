import React, { Component } from 'react';
import './RegisterModal.css';

import CustomModal from '../Components/CustomModal/CustomModal';

import TextInput from './Shared/TextInput';
import PasswordInput from './Shared/PasswordInput';
import SubmitInput from './Shared/SubmitInput';
import CheckBox from './Shared/CheckBox';

class RegisterModal extends Component {
    render() {
        if (this.props.visibility) {
            return (
                <CustomModal visibility={this.props.visibility} onClose={this.props.closeModal}>
                    <div className="RegisterModalHead">
                        <p>REJESTRACJA</p>                        
                    </div>
                    <div className="RegisterModalModalContent">
                        <form>
                            <TextInput labelText="Login" name="login" />
                            <PasswordInput labelText="Password" name="password" />
                            <PasswordInput labelText="RePassword" name="rePassword" />
                            <TextInput labelText="Email" name="Email" />
                            <CheckBox labelText="Agree Terms"/>
                            <SubmitInput text="Submit" />                            
                        </form>
                    </div>
                </CustomModal>
            );
        }
        else {
            return null;
        }
    }
}

export default RegisterModal;