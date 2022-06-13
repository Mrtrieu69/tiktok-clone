import React, { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import searchServices from '~/services/searchService';
import classNames from 'classnames/bind';
import { FaSpinner, FaTimesCircle } from 'react-icons/fa';
import styles from './Search.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';
import { useDebounced } from '~/hooks';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounced(searchValue, 500);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSearch = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch);
        }
    };

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                placement="bottom"
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult?.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={handleSearch}
                        placeholder="Search accounts and videos"
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FaTimesCircle />
                        </button>
                    )}
                    {loading && <FaSpinner className={cx('loading')} />}
                    <div className={cx('search-btn')}>
                        <SearchIcon />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
