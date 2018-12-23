import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import LayoutView from './components/LayoutView/LayoutView';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <LayoutView>
        <main>아이즈원 한정 영상 저장소</main>
      </LayoutView>
    );
  }
}

export default App;
