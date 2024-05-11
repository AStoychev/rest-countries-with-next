import axios from "axios";

import { checkForNativeName } from "../functions/checkForNativeName";
import { getCurrency } from "../functions/getCurrency";
import { getLanguage } from "../functions/getLanguages";

interface countryObject {
    flags: {
        png: string
    },
    name: {
        common: string,
    },
    nativeName: {
        name: {
            nativeName: {
                common: string[]
            }
        }
    },
    population: number,
    region: string,
    capital: string,
    cca3: string,
    subregion: string,
    topLevelDomain: string,
    currency: string,
    language: string,
    borders: [],
}

export const countryServiceFactory = () => {

    async function getAllCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');

            const data = response.data.map((country: countryObject) => ({
                flag: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                cca3: country.cca3
            }))
            return data
        }
        catch (error) {
            console.error('Error: ', error)
        }
    }

    async function getCountryByName(country: string) {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
            const data = [{
                flag: response.data[0].flags.svg,
                name: response.data[0].name.common,
                population: response.data[0].population,
                region: response.data[0].region,
                capital: response.data[0].capital[0],
                cca3: response.data[0].cca3,
            }]
            return data
        }
        catch (error) {
            console.error('Error: ', error)

            
            return []
        }
    }

    async function getCountryByRegion(region: string) {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);

            const data = response.data.map((country: countryObject) => ({
                flag: country.flags.png,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                cca3: country.cca3
            }))
            return data
        }
        catch (error) {
            console.error('Error: ', error)
        }
    }

    async function goToCountry(country: string) {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${country}`);
            const data = [{
                flag: response.data[0].flags.svg,
                name: response.data[0].name.common,
                population: response.data[0].population,
                region: response.data[0].region,
                capital: response.data[0].capital[0],
                cca3: response.data[0].cca3,
                nativeName: checkForNativeName(response.data[0].name.nativeName),
                subregion: response.data[0].subregion,
                topLevelDomain: response.data[0].tld,
                currency: getCurrency(response.data[0].currencies),
                language: getLanguage(response.data[0].languages),
                borders: response.data[0].borders,
            }]
            return data
        }
        catch (error) {
            console.error('Error: ', error)
        }
    }

    return {
        getAllCountries,
        getCountryByName,
        getCountryByRegion,
        goToCountry,
    }
}