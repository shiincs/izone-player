import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import LayoutView from './components/LayoutView/LayoutView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutView>
          <main>아이즈원 한정 영상 저장소</main>
        </LayoutView>
      </Router>
    );
  }
}

export default App;
