interface Currencies {
    [currencyCode: string]: {
        name: string;
        symbol: string;
    };
}

export function getCurrency(currencies: Currencies): string[] {
    const currencyNames: string[] = [];

    for (const code in currencies) {
        currencyNames.push(currencies[code].name);
    }

    return currencyNames;
}