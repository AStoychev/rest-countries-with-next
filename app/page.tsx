"use client"
import { useSelector } from "react-redux";
import { isSelectedDark } from "../lib/store/reducers/themeSlice";

import Home from "./home/page";

export default function Main() {
    const isDark = useSelector(isSelectedDark);

    return (
        <>
            <Home dark={isDark} />
        </>
    )
}