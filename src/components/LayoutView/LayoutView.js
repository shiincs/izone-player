import React, { Component } from 'react';
import HeaderView from '../HeaderView/HeaderView';
import FooterView from '../FooterView/FooterView';

export default class LayoutView extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderView />
        {this.props.children}
        <FooterView />
      </React.Fragment>
    );
  }
}
