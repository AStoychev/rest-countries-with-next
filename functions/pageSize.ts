interface pageSizeProps {
    flag: string
    name: string
    population: number
    region: string
    capital: string
    cca3: string
}

export function pageSize(data:pageSizeProps[], size:number) {
    const page = Math.ceil(data.length / size)
    return page
}