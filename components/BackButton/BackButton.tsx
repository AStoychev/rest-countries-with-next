import { useRouter } from "next/navigation";

import { IoArrowBack } from "react-icons/io5";
import styles from './BackButton.module.css';

interface ButtonProps {
    isDark: boolean
}

export default function BackButton({isDark}: ButtonProps) {
    const router = useRouter();

    const onBackClick = () => {
        router.push('-1')
    }

    return (
        <>
            <button className={isDark ? styles.backButtonDark : styles.backButtonLight} onClick={onBackClick}>
                <IoArrowBack />
                <span>Back</span>
            </button>
        </>
    )
}