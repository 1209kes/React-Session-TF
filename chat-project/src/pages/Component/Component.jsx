import React from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import './Component.module.css';

const ComponentPage = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="content">Content goes here</main>
            <Footer />
        </div>
    );
};

export default ComponentPage;
