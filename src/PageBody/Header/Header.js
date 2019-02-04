import React, { Component } from 'react';
import './Header.css';

import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import SingIn from './SingIn/SingIn';

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuItems = ["ImageSlider", "option2", "option3", "bigos"];   
  }
  render() {
    return (
      <header key="Header" className="Header">
        <Logo />
        <Menu menuItems={this.menuItems} tabSwitch={this.props.tabSwitch} />
        <SingIn />
      </header>
    );
  }
}
export default Header;