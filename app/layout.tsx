"use client"
import React from 'react';

import { Provider } from 'react-redux';
import store from '../lib/store';

import Header from './header/page';

import "./global.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <link rel="icon" href="/world.png" type="image/png" />
            <title>Countries</title>
            <body>
                <Provider store={store}>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    )
}