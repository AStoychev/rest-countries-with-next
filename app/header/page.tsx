"use client"
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isSelectedDark } from '../../lib/store/reducers/themeSlice';

import SwitchButton from '../../components/SwitchButton/SwitchButton';

import styles from './page.module.css';

export default function Header() {
    const isDark = useSelector(isSelectedDark);

    useEffect(() => {
        if (isDark) {
            document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
        } else {
            document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        }
    })

    return (
        <header className={isDark ? styles.headerDark : styles.headerLight}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link className={styles.link} href="/">Where in the world?</Link>
                    <SwitchButton />
                </div>
            </div>
        </header>
    )
}