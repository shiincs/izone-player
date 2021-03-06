import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderView.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../../utilities/hamburger.svg';
import { ReactComponent as Close } from '../../utilities/close.svg';

const cx = classNames.bind(styles);

export default class HeaderView extends Component {
  state = {
    // 햄버거 메뉴 초기 상태를 false로 지정한다.
    hamburgerOpen: false,
  };

  // 햄버거 메뉴 토글을 위한 메소드
  handleHamburger = () => {
    this.setState((prev) => ({
      hamburgerOpen: !prev.hamburgerOpen,
    }));
  };

  render() {
    const { hamburgerOpen } = this.state;

    return (
      <header className={cx('header')}>
        <h1 className={cx('title')}>
          <Link to='/'>아이즈원 플레이어</Link>
        </h1>

        <ul className={cx('userMenu')}>
          <li className={cx('loginBtn')}>
            <Link to='/'>로그인</Link>
          </li>

          <li className={cx('registerBtn')}>
            <Link to='/'>회원가입</Link>
          </li>
        </ul>

        <nav className={cx('navMenu')}>
          <ul className={cx('navList')}>
            <li className={cx('navItem')}>
              <Link to='/'>전체</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>장원영</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>미야와키 사쿠라</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>조유리</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>최예나</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>안유진</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>야부키 나코</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>권은비</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>강혜원</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>혼다 히토미</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>김채원</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>김민주</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>이채연</Link>
            </li>
          </ul>
        </nav>

        {/* 모바일 사이즈에서 네비게이션 바가 햄버거 메뉴로 전환된다. */}
        <button
          className={cx(
            { hamburger: !hamburgerOpen },
            { closeBtn: hamburgerOpen },
            { open: hamburgerOpen }
          )}
          onClick={() => this.handleHamburger()}
        >
          {hamburgerOpen ? <Close /> : <Hamburger />}
        </button>

        {/* 햄버거 메뉴 클릭시 등장하는 메뉴 바 */}
        <section className={cx('menuBar', { open: hamburgerOpen })}>
          <div className={cx('userInfo')}>
            <span className={cx('userName')}>로그인 해주세요</span>
            <ul className={cx('userBtns')}>
              <li className={cx('loginBtn')}>
                <Link to='/'>로그인</Link>
              </li>
              <li className={cx('registerBtn')}>
                <Link to='/'>회원가입</Link>
              </li>
            </ul>
          </div>
          <ul className={cx('navBtns')}>
            <li className={cx('navItem')}>
              <Link to='/'>전체</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>장원영</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>미야와키 사쿠라</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>조유리</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>최예나</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>안유진</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>야부키 나코</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>권은비</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>강혜원</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>혼다 히토미</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>김채원</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>김민주</Link>
            </li>

            <li className={cx('navItem')}>
              <Link to='/'>이채연</Link>
            </li>
          </ul>
        </section>
      </header>
    );
  }
}
