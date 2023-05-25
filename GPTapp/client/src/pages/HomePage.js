import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2 style={styles.title}>Welcome to our Farming Chatbot!</h2>
                <p style={styles.text}>Get personalized advice for your farming needs.</p>
                <p style={styles.text}>Log in to get started:</p>
                <Link to="/login" style={styles.link}>Login</Link>
                <p style={styles.text}>Don't have an account yet?</p>
                <Link to="/register" style={styles.link}>Register</Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundSize: 'cover',
    },
    content: {
        textAlign: 'center',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '8px',
        position: 'relative', 
        top: '-20%', // shift the content up
    },
    title: {
        color: '#228B22', // forest green
        fontSize: '2em', 
    },
    text: {
        color: '#333', // dark grey
        fontSize: '1.2em', 
    },
    link: {
        display: 'inline-block',
        marginTop: '10px',
        padding: '10px',
        color: '#fff', // white
        background: '#228B22', // forest green
        textDecoration: 'none',
        borderRadius: '4px',
        fontSize: '1.2em', 
    },
};

export default HomePage;
