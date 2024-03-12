import React from 'react';
import Head from "next/head";
import {blogsData} from "../../../lib/data";
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'

const Index = () => {
    return (
        <div style={styles.container}>
            <Head>
                <title>Blog</title>
            </Head>

            <h1 style={styles.title}>Blog</h1>
            <p style={styles.text}>
                Welcome to our blog! Stay tuned for exciting posts and updates.
            </p>
            <ul>
                {blogsData.map((blog: any) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`}>
                        <BlogCard blog={blog} />
                    </Link>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '700px',
        maxHeight:'500px',
        overflowY:'auto',
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
        fontSize: '10px',
        marginBottom: '10px',
        lineHeight: '1.5',
        color: '#555',
    },
};

export default Index;
