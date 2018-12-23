import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderView.module.scss';

const cx = classNames.bind(styles);

export default class HeaderView extends Component {
  render() {
    return (
      <header className={cx('header')}>
        <h1>아이즈원 플레이어</h1>
      </header>
    );
  }
}
