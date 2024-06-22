"use client";
import { useState } from 'react';

import styles from './PageButton.module.css';

interface PageButtonsProps {
    handlePrevious: React.MouseEventHandler<HTMLButtonElement>
    handleNext: React.MouseEventHandler<HTMLButtonElement>
    dark: boolean
    currentPage: number
    pagesSize: number
}

export default function PageButtons({ handlePrevious, handleNext, dark, currentPage, pagesSize }: PageButtonsProps) {
    return (
        <div className={styles.pageWrapper}>
            <button
                onClick={handlePrevious}
                className={dark ? styles.buttonDark : styles.buttonLight}
                disabled={currentPage === 1}>
                Previous
            </button>
            <div className={styles.pages}>
                <p className={styles.currentPage}>{currentPage}</p>
                <p>of</p>
                <p>{pagesSize}</p>
            </div>
            <button
                onClick={handleNext}
                className={dark ? styles.buttonDark : styles.buttonLight}
                disabled={currentPage === pagesSize}>
                Next
            </button>
        </div>
    )
}