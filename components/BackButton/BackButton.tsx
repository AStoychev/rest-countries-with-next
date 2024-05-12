import { useRouter } from "next/navigation";

import { IoArrowBack } from "react-icons/io5";
import styles from './BackButton.module.css';

interface ButtonProps {
    isDark: boolean
}

export default function BackButton({isDark}: ButtonProps) {
    const router = useRouter();

    const onBackClick = () => {
        router.back();
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