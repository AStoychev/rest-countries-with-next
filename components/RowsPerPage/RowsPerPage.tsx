"use client";
import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import styles from './RowsPerPage.module.css';

interface RowsPerPageProps {
    selectRowsPerPage: Function
    dark: boolean
}

export default function RowsPerPage({ selectRowsPerPage, dark }: RowsPerPageProps) {
    const [selectedOptions, setSelectedOptions] = useState<number>(12);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSelectChange = (value: number) => {
        const selectedValue = value;
        setSelectedOptions(selectedValue);
        selectRowsPerPage(value)
        setIsOpen(false);
    };

    const menuItems = [4, 8, 12, 16, 20];

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownWrapper}>
                <button onClick={() => setIsOpen(!isOpen)} className={dark ? styles.selectDark : styles.selectLight}>
                    <div className={styles.seletOptions}>{selectedOptions} <IoIosArrowUp /></div>
                </button>
            </div>
            {isOpen && (
                <div className={dark ? styles.optionsWrapperDark : styles.optionsWrapperLight}>
                    {menuItems.map((item, index) => (
                        <button key={index} className={styles.buttonOptions} onClick={() => handleSelectChange(item)}>{item}</button>
                    ))}
                </div>
            )}
        </div>
    )
}