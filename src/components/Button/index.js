import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
    className,
    to,
    primary,
    disabled,
    solid,
    rounded,
    text,
    outline,
    type = 'medium',
    href,
    onClick,
    children,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    //Remove events listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        [className]: className,
        solid,
        rounded,
        disabled,
        outline,
        text,
        [type]: type,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    solid: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    type: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
