"use client"
import { useState, useEffect } from 'react';

import { countryServiceFactory } from '../../services/countryServices';

import Card from '../../components/Card/Card';
import FilterByRegion from '../../components/FilterByRegion/FilterByRegion';
import Search from '../../components/Search/Search';
import NotFound from '../../components/NotFound/NotFound';

import styles from './page.module.css';

interface Country {
    flag: string
    name: string
    population: number
    region: string
    capital: string
    cca3: string
}

interface HomeStyle {
    dark: boolean
}

export default function Home({ dark }: HomeStyle) {
    const [data, setData] = useState<Country[]>([]);
    const [show, setShow] = useState<string>('');
    const [currentCountries, setCurrentCoutries] = useState<string>('');
    const getCountries = countryServiceFactory();

    const changeShow = (filterType: string, countries: string) => {
        setShow(filterType)
        setCurrentCoutries(countries)
    }

    useEffect(() => {
        if (show === 'region') {
            getCountries.getCountryByRegion(currentCountries)
                .then(result => {
                    if (result !== undefined) {
                        setData(result)
                    }
                })
        }
        else if (show === 'one') {
            getCountries.getCountryByName(currentCountries)
                .then(result => {
                    if (result !== undefined) {
                        setData(result)

                    }
                })
        }
        else {
            getCountries.getAllCountries()
                .then(result => {
                    if (result !== undefined) {
                        setData(result)
                    }
                })
        }
    }, [show, currentCountries])

    return (
        <div className={dark ? styles.homeDark : styles.homeLight}>
            <div className="container">
                <div className={styles.countriesSelector}>
                    <Search changeShow={changeShow} dark={dark} />
                    <FilterByRegion changeShow={changeShow} dark={dark} />
                </div>
                {!data.length ?
                    <NotFound/>
                    :
                    <div className={styles.countries}>
                        {data && data.map(country => (
                            <Card
                                key={country.flag}
                                flag={country.flag}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                cca3={country.cca3}
                                dark={dark}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}