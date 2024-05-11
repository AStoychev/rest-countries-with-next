import { useRouter } from 'next/navigation';

import styles from './BorderCountiesButton.module.css';

interface ButtonProps {
    border: string
    isDark: boolean
}

export default function BorderCountriesButton({ border, isDark }: ButtonProps) {
    const router = useRouter();

    const onBorderButtonClick = (neighbor: string) => {
        router.push(`/${neighbor}`)
    }

    return (
        <>
            <div className={styles.buttonWrapper}>
                <button onClick={() => onBorderButtonClick(border)} className={isDark ? styles.buttonDark : styles.buttonLight}>{border}</button>
            </div>
        </>
    )
}