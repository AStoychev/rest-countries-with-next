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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const [pageSizes, setPageSizes] = useState<number>(12);

    let pagesSize = pageSize(data, pageSizes);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, pagesSize));
    };

    const goToFirstPage = () => {
        setCurrentPage(1)
    };

    const selectRowsPerPage = (number: number) => {
        setPageSizes(number)
    };

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSizes;
        const endIndex = startIndex + pageSizes;
        const newData = data.slice(startIndex, endIndex);
        setPaginatedData(newData)
    }, [currentPage, data, pageSizes]);

    return { currentPage, paginatedData, pagesSize, handlePrevious, handleNext, goToFirstPage, selectRowsPerPage };
}

export default usePage;