import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Menu.module.scss';
import { IoIosArrowBack } from 'react-icons/io';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back')}>
                <IoIosArrowBack />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
