import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './FooterView.module.scss';

const cx = classNames.bind(styles);

export default class FooterView extends Component {
  render() {
    return (
      <footer className={cx('footer')}>
        <p className={cx('copyright')}>&copy; 2019 izone-player.netlify.com</p>
      </footer>
    );
  }
}
