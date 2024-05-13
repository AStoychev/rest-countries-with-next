"ue client";
import { useState, useEffect } from "react";

import { pageSize } from "../functions/pageSize";

interface usePageProps {
    flag: string
    name: string
    population: number
    region: string
    capital: string
    cca3: string
}

const PAGE_SIZE = 12;

const usePage = (data: usePageProps[]) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([])

    let pagesSize = pageSize(data, PAGE_SIZE)

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, pagesSize));
    }

    const goToFirstPage = () => {
        setCurrentPage(1)
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        const newData = data.slice(startIndex, endIndex);
        setPaginatedData(newData)
    }, [currentPage, data])

    return { currentPage, paginatedData, pagesSize, handlePrevious, handleNext, goToFirstPage };
}

export default usePage;