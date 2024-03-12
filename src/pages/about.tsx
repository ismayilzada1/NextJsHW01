import React from 'react';
import Head from 'next/head';

const about = () => {
    return (
        <div style={styles.container}>
            <Head>
                <title>About</title>
            </Head>

            <h1 style={styles.title}>About Us</h1>
            <p style={styles.text}>
                Welcome to our website! We are dedicated to providing quality content and services to our users.
            </p>
            <p style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula justo vitae enim fermentum,
                eget vehicula sapien lacinia.
            </p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    text: {
        fontSize: '18px',
        marginBottom: '10px',
        lineHeight: '1.5',
        color: '#555',
    },
};

export default about;
