import React from 'react';
import Link from 'next/link';
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100vw',
        height: '100vh',
        fontFamily: 'Arial, sans-serif', // Adding font family
        backgroundColor: '#2d2d30',
    };

    const headerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Centering vertically
        gap: '40px',
        height: '10%',
        padding: '10px 20px', // Adding padding
        backgroundColor: '#0e0e0e',
    };

    const listItemStyles = {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
    };

    const footerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        padding: '10px 20px', // Adding padding
        backgroundColor: '#0e0e0e',
    };

    return (
        <div style={containerStyles}>
            <header style={headerStyles} className={`${roboto.className}`}>
                <h1 style={{ fontSize: '50px', color: '#fff' }}>MyApp</h1>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', color: '#fff' }}>
                    <ul style={listItemStyles}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contacts">Contacts</Link>
                        </li>
                        <li>
                            <Link href="/account">Account</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                {children}
            </div>
            <footer style={footerStyles}  className={`${roboto.className}`}>
                <span style={{ color: '#fff' }}>Copyright by MAGA | 2024</span>
            </footer>
        </div>
    );
};

export default Layout;
