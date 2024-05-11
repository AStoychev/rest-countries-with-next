import Link from 'next/link';

import { changeBackgroundColor } from '../../functions/changeBackgrondColor';

import { IoSunnySharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import styles from './page.module.css';

interface HeaderStyle {
    switchTheme: Function
    isDark: boolean
}

const LIGHT_MODE_TEXT = 'Light Mode';
const DARK_MODE_TEXT = 'Dark Mode';

export default function Header({ switchTheme, isDark }: HeaderStyle) {
    changeBackgroundColor(isDark);
    const onClickTheme = () => {
        switchTheme()
    }

    return (
        <header className={isDark ? styles.headerDark : styles.headerLight}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link className={styles.link} href="/">Where in the world?</Link>
                    <div className={styles.colorModeWrapper}>
                        {isDark ?
                            <IoSunnySharp size='24px'/>
                            :
                            <IoMoonOutline size='24px' />
                        }
                        <button onClick={onClickTheme}>{isDark ? LIGHT_MODE_TEXT : DARK_MODE_TEXT}</button>
                    </div>
                </div>
            </div>
        </header>
    )
}