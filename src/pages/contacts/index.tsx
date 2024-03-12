import React from 'react';
import Head from "next/head";

const Contacts = () => {
    return (
        <div style={styles.container}>
            <Head>
                <title>Contacts</title>
            </Head>
            <h1 style={styles.title}><a href="/contacts/details">Contacts</a></h1>
            <p style={styles.text}>
                If you have any inquiries or questions, feel free to contact us using the information below.
            </p>
            <p style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula justo vitae enim fermentum, eget vehicula sapien lacinia.
            </p>
            <div style={styles.contactInfo}>
                <p>Email: example@example.com</p>
                <p>Phone: +123456789</p>
                <p>Address: 123 Street, City, Country</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '0 auto',
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
    contactInfo: {
        marginTop: '20px',
        color:"#222"
    },
};

export default Contacts;
