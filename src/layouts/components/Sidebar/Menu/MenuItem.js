import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ title, to, icon }) => {
    return (
        <NavLink to={to} className={({ isActive }) => cx('menu-item', { active: isActive })}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
