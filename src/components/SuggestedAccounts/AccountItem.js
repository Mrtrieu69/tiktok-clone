import React from 'react';
import classNames from 'classnames/bind';
import { AiFillCheckCircle } from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';

import Button from '../Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props} className={cx('preview')}>
            <PopperWrapper>
                <div className={cx('card')}>
                    <div className={cx('header')}>
                        <img
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dad02241bb9dc39372bc37121e998ba6.jpeg?x-expires=1664078400&x-signature=xh1rarDc8UKCXh92lO%2B2o82EVPo%3D"
                            alt=""
                            className={cx('preview-avatar')}
                        />
                        <Button className={cx('follow')} primary>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('body')}>
                        <p className={cx('nickname')}>
                            <strong>User name</strong>
                            <span className={cx('check')}>
                                <AiFillCheckCircle />
                            </span>
                        </p>
                        <p className={cx('preview-name')}>Name</p>
                    </div>
                    <p className={cx('analytics')}>
                        <span className={cx('value')}>8.8M</span>
                        <span className={cx('preview-label')}>Follower</span>
                        <span className={cx('value')}>750M</span>
                        <span className={cx('preview-label')}>Likes</span>
                    </p>
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy offset={[-20, 0]} interactive placement="bottom" delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dad02241bb9dc39372bc37121e998ba6.jpeg?x-expires=1664078400&x-signature=xh1rarDc8UKCXh92lO%2B2o82EVPo%3D"
                        alt=""
                    />
                    <div className={cx('user-info')}>
                        <p className={cx('nickname')}>
                            <strong>User name</strong>
                            <span className={cx('check')}>
                                <AiFillCheckCircle />
                            </span>
                        </p>
                        <p className={cx('name')}>Name</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

AccountItem.propTypes = {};

export default AccountItem;
