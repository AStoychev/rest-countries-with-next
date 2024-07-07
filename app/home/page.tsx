"use client"
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isSelectedDark } from '../../lib/store/reducers/themeSlice';

import usePage from '../../hooks/usePage';

import { countryServiceFactory } from '../../services/countryServices';

import Card from '../../components/Card/Card';
import FilterByRegion from '../../components/FilterByRegion/FilterByRegion';
import Search from '../../components/Search/Search';
import PageButtons from '../../components/PageButtons/PageButtons';
import NotFound from '../../components/NotFound/NotFound';
import Spinner from '../../components/Spinner/Spinner';
import RowsPerPage from '../../components/RowsPerPage/RowsPerPage';

import styles from './page.module.css';

interface Country {
    flag: string
    name: string
    population: number
    region: string
    capital: string
    cca3: string
}

export default function Home() {
    const [data, setData] = useState<Country[]>([]);
    const [show, setShow] = useState<string>('');
    const [currentCountries, setCurrentCoutries] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const isDark = useSelector(isSelectedDark);

    const { currentPage, paginatedData, pagesSize, handlePrevious, handleNext, goToFirstPage, selectRowsPerPage } = usePage(data)

    const getCountries = countryServiceFactory();

    const changeShow = (filterType: string, countries: string) => {
        setShow(filterType)
        setCurrentCoutries(countries)
        setLoading(true)
        goToFirstPage()
    };

    const onCardClickHandle = () => {
        setLoading(true)
    }

    useEffect(() => {
        if (show === 'region') {
            getCountries.getCountryByRegion(currentCountries)
                .then(result => {
                    if (result !== undefined) {
                        setData(result)
                        setLoading(false)
                    }
                })
        }
        else if (show === 'one') {
            getCountries.getCountryByName(currentCountries)
                .then(result => {
                    if (result !== undefined) {
                        setData(result)
                        setLoading(false)
                    }
                })
        }
        else {
            getCountries.getAllCountries()
                .then(result => {
                    if (result !== undefined) {
                        setData(result)
                        setLoading(false)
                    } else {
                        console.log('Error')
                    }
                })
        }
    }, [show, currentCountries]);

    return (
        <div className={isDark ? styles.homeDark : styles.homeLight}>
            <div className="container">
                <div className={styles.countriesSelector}>
                    <Search changeShow={changeShow} dark={isDark} />
                    <FilterByRegion changeShow={changeShow} dark={isDark} />
                </div>
                {!data.length && !loading ?
                    <NotFound />
                    :
                    loading
                        ?
                        <Spinner />
                        :
                        <div className={styles.countriesWrapper}>
                            <div className={styles.countries}>
                                {paginatedData && paginatedData.map(country => (
                                    <Card
                                        key={country.flag}
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                        cca3={country.cca3}
                                        dark={isDark}
                                        onCardClickHandle={onCardClickHandle}
                                    />
                                ))}
                            </div>
                            <div className={styles.pageWrapper}>
                                <RowsPerPage dark={isDark} selectRowsPerPage={selectRowsPerPage} />
                                <PageButtons
                                    handlePrevious={handlePrevious}
                                    handleNext={handleNext}
                                    dark={isDark}
                                    currentPage={currentPage}
                                    pagesSize={pagesSize}
                                />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}