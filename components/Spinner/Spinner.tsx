import { useSelector } from "react-redux";
import { isSelectedDark } from "../../lib/store/reducers/themeSlice";

import { FadeLoader, ClockLoader } from "react-spinners";

import styles from './Spinner.module.css';

const DARK_MODE_SPINNER_COLOR = 'hsl(0, 0%, 100%)';
const LIGHT_MODE_SPINNER_COLOR = 'hsl(200, 15%, 8%)';

export default function Spinner() {
    const isDark = useSelector(isSelectedDark);

    return (
        <div className={styles.spinnerWrapper}>
            <ClockLoader color={isDark ? DARK_MODE_SPINNER_COLOR : LIGHT_MODE_SPINNER_COLOR}/>
        </div>
    )
}