"use client";
import { useState, ChangeEvent } from 'react';

import { GrSearch } from "react-icons/gr";
import styles from './Search.module.css';

interface SearchProps {
    changeShow: Function
    dark: boolean
}

export default function Search({ changeShow, dark }: SearchProps) {
    const [country, setCountry] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }

    const handleClick = () => {
        changeShow('one', country.toLowerCase())
    }

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            handleClick()
        }
    }

    return (
        <div className={dark ? styles.searchDark : styles.searchLight}>
            <GrSearch className={styles.searchIcon} onClick={handleClick} />
            <div className={styles.searchWrapper}>
                <label htmlFor='search'></label>
                <input
                    type='search'
                    name='seacrh'
                    id='search'
                    className={dark ? styles.searchInputDark : styles.searchInputLight}
                    placeholder='Search for a country...'
                    value={country}
                    onChange={handleChange}
                    onKeyDown={handleEnterPress}
                />
            </div>
        </div>
    )
}