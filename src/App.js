import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';

import Header from './PageBody/Header/Header';
import BodyTab1 from './PageBody/Body/BodyTab1';
import BodyTab2 from './PageBody/Body/BodyTab2';
import BodyTab3 from './PageBody/Body/BodyTab3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTabShow: 1 };

    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(x){
    //console.log("oarametr x: " );
    this.setState({ currentTabShow: x });    
  }
  render() {
    let currentTab;

    switch (this.state.currentTabShow) {
      case 1:
        currentTab = <BodyTab1 />;
        break;
      case 2:
        currentTab = <BodyTab2 />;
        break;
      case 3:
        currentTab = <BodyTab3 />;
        break;        
      default:
        currentTab = <BodyTab1 />;
        break;
    }
    return (
      <Fragment>
        <Header tabSwitch={this.switchTab} />
        {currentTab}          
      </Fragment>
    );
  }
}
export default App;