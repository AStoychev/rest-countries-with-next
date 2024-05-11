"use client";
import { useState } from "react";

import Header from "./header/page";
import Home from "./home/page";

export default function Main() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [isDark, setIsDark] = useState<boolean>(true);

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setIsDark(isDark === false ? true : false)
    }

    return (
        <>
            <Header switchTheme={switchTheme} isDark={isDark} />
            <Home dark={isDark} />
        </>
    )
}