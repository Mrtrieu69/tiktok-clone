import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('user-image')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FaCheckCircle className={cx('check')} />}
                </h4>
                <p className={cx('user-name')}>{data.nickname}</p>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
