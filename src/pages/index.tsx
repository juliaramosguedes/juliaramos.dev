import React from 'react';
import Head from 'next/head';
import { Contact } from '../components';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Julia Ramos.Dev</title>
            </Head>
            <Contact/>
        </>
    );
};

export default Home;
