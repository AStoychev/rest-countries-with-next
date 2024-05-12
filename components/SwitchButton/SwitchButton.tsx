import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../lib/store';
import { switchTheme } from '../../lib/store/reducers/themeSlice';

import { IoSunnySharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

import styles from './SwitchButton.module.css';

const LIGHT_MODE_TEXT = 'Light Mode';
const DARK_MODE_TEXT = 'Dark Mode';

const SwitchButton: React.FC = () => {
    const mode = useSelector((state: RootState) => state.theme.mode);
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch: AppDispatch = useDispatch();

    const handleSwitchMode = () => {
        dispatch(switchTheme());
    };

    return (
        <div className={styles.switchButton} onClick={handleSwitchMode}>
            {isDark ?
                <IoSunnySharp size='24px' />
                :
                <IoMoonOutline size='24px' />
            }
            <p>{!isDark ? DARK_MODE_TEXT : LIGHT_MODE_TEXT}</p>
        </div>
    )
}

export default SwitchButton