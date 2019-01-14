import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ListView.module.scss';

const cx = classNames.bind(styles);

export default class ListView extends Component {
  render() {
    return (
      <main className={cx('listContainer')}>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <figure className={cx('content')}>
              <iframe
                className={cx('video')}
                src='https://www.youtube.com/embed/WZwr2a_lFWY'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <figcaption className={cx('videoTitle')}>
                IZ*ONE (아이즈원) - 라비앙로즈 (La Vie en Rose) MV
              </figcaption>
            </figure>
          </li>
          <li className={cx('item')}>헤헤</li>
          <li className={cx('item')}>헤헤</li>
          <li className={cx('item')}>헤헤</li>
          <li className={cx('item')}>헤헤</li>
          <li className={cx('item')}>헤헤</li>
        </ul>
      </main>
    );
  }
}
