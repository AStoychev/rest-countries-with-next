import { RootState } from "..";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    mode: 'dark' | 'light';
    isDark: boolean
}

const initialState: ThemeState = {
    mode: 'dark',
    isDark: true,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            state.isDark = state.isDark === false ? true : false
        },
    },
});

export const { switchTheme } = themeSlice.actions;

export const selectedThemeMode = (state: RootState) => state.theme.mode;
export const isSelectedDark = (state: RootState) => state.theme.isDark;


export default themeSlice.reducer;