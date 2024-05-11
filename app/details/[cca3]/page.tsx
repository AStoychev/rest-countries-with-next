"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { countryServiceFactory } from "../../../services/countryServices";
import { addCommasToNumber } from "../../../functions/addCommasToNumber";
import BackButton from "../../../components/BackButton/BackButton";
import BorderCountriesButton from "../../../components/BorderCountriesButton/BorderCountriesButton";

import styles from './page.module.css'

interface Country {
    flag: string
    name: string
    population: number
    region: string
    capital: string
    nativeName?: string[],
    cca3: string,
    subregion: string,
    topLevelDomain: string,
    currency: string[],
    language: string[],
    borders: [],
}

interface DetailsStyle {
    isDark: boolean
}

export default function CountryDetails({ isDark }: DetailsStyle) {
    const [country, setCountry] = useState<Country[]>([]);
    const getCountry = countryServiceFactory();
    let thisCountry: string | undefined = undefined;

    const countryParams = useParams();
    // thisCountry = countryParams.country?.toLocaleLowerCase()

    useEffect(() => {
        if (thisCountry !== undefined) {
            getCountry.goToCountry(thisCountry)
                .then(result => {
                    if (result !== undefined) {
                        setCountry(result)
                    }
                })
        }
    }, [thisCountry])

    return (
        <div className={isDark ? styles.detailsDark : styles.detailsLight}>
            <div className="container">
                <div className={styles.detailsWrapper}>
                    <div className={styles.buttonWrapper}>
                        <BackButton isDark={isDark}/>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.imageWrapper}>
                            <img src={country[0]?.flag} />
                        </div>
                        <div className={styles.countryDetails}>
                            <h2>{country[0]?.name}</h2>
                            <div className={styles.data}>
                                <ul>
                                    <li>Native Name: <span>{country[0]?.nativeName?.join(', ')}</span></li>
                                    <li>Population: <span>{addCommasToNumber(country[0]?.population)}</span></li>
                                    <li>Region: <span>{country[0]?.subregion}</span></li>
                                    <li>Sub Region: <span>{country[0]?.subregion}</span></li>
                                    <li>Capital: <span>{country[0]?.capital}</span></li>
                                </ul>
                                <ul>
                                    <li>Top Level Domain: <span>{country[0]?.topLevelDomain}</span></li>
                                    <li>Currencies: <span>{country[0]?.currency}</span></li>
                                    <li>Languages: <span>{country[0]?.language?.join(', ')}.</span></li>
                                </ul>
                            </div>
                            {country[0]?.borders ?
                                <div className={styles.borders}>
                                    <p>Border Countries:</p>
                                    <div>
                                        {country[0]?.borders?.map((border) =>
                                            <div key={border}>
                                                <BorderCountriesButton border={border} isDark={isDark}/>
                                            </div>
                                        )}
                                    </div>

                                </div>
                                :
                                ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}