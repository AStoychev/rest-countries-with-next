import { useRouter } from 'next/navigation';

import { addCommasToNumber } from '../../functions/addCommasToNumber';

import styles from './Card.module.css';

interface CardCountryProps {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    cca3: string;
    dark : boolean;
    onCardClickHandle: Function
}

export default function Card({ flag, name, population, region, capital, cca3, dark, onCardClickHandle }: CardCountryProps) {
    const router = useRouter();

    const onCardClick = () => {
        router.push(`/details/${cca3}`);
        onCardClickHandle()
    }

    return (
        <div className={dark ? styles.cardDark : styles.cardLight} onClick={onCardClick}>
            <div className={styles.cardWrapper}>
                <div className={styles.flagWrapper}>
                    <img src={flag} alt={name} />
                </div>
                <div className={styles.infoWrapper}>
                    <h4>{name}</h4>
                    <p>Population: <span>{addCommasToNumber(population)}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </div>
        </div>
    )
}