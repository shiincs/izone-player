import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ListView.module.scss';

const cx = classNames.bind(styles);

export default class ListView extends Component {
  render() {
    return <main className={cx('listContainer')}>영상 리스트 페이지</main>;
  }
}
