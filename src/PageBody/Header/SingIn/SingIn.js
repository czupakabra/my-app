import React, { Component } from 'react';
import { Fragment } from 'react';
import './SingIn.css';

import MenuItem from "../Shared/MenuItem";
import LoginModal from '../../../Modal/LoginModal';
import RegisterModal from '../../../Modal/RegisterModal';

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = { loginModalVisibility: false, registerModalVisibility: false };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);

    this.openRegisterModal = this.openRegisterModal.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);    
  }

  openLoginModal() {
    this.setState({ loginModalVisibility: true });       
  }
  closeLoginModal() {
    this.setState({ loginModalVisibility: false });
  }

  openRegisterModal() {    
    this.setState({ registerModalVisibility: true });   
  }
  closeRegisterModal() {
    this.setState({ registerModalVisibility: false });
  }

  render() {
    return (
      <Fragment>
        <div className="SingIn">
          <ul>
            <MenuItem itemKey="Login" text="Login" onClick={this.openLoginModal} />
            <MenuItem itemKey="Register" text="Register" onClick={this.openRegisterModal}/>
          </ul>
        </div>
        <LoginModal visibility={this.state.loginModalVisibility} closeModal={this.closeLoginModal} />  
        <RegisterModal visibility={this.state.registerModalVisibility} closeModal={this.closeRegisterModal}/>      
      </Fragment>
    );
  }
}

export default SingIn;