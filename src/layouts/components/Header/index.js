import React from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { FaRegKeyboard } from 'react-icons/fa';
import { AiOutlineMore, AiOutlineUser, AiOutlinePlus } from 'react-icons/ai';
import { IoLanguageSharp } from 'react-icons/io5';
import { BiHelpCircle } from 'react-icons/bi';
import { FiSettings, FiLogOut } from 'react-icons/fi';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon } from '~/components/icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <IoLanguageSharp />,
        title: 'English',
        children: {
            title: 'Langues',
            data: [
                {
                    type: 'langue',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langue',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'langue',
                    code: 'ru',
                    title: 'Русский',
                },
            ],
        },
    },
    {
        icon: <BiHelpCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FaRegKeyboard />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const handleChange = (item) => {
        switch (item.type) {
            case 'langue':
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <AiOutlineUser />,
            title: 'Profile',
            to: '/profile',
        },
        {
            icon: <FiSettings />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FiLogOut />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button solid leftIcon={<AiOutlinePlus />}>
                                Upload
                            </Button>
                            <Tippy animation="none" content="Message">
                                <button className={cx('icon')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy animation="none" content="Inbox">
                                <button className={cx('icon')}>
                                    <InboxIcon />
                                    <div className={cx('notion')}>12</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button solid leftIcon={<AiOutlinePlus />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src="" alt="User Name" />
                        ) : (
                            <button className={cx('more')}>
                                <AiOutlineMore />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
