import React from 'react';
import Head from 'next/head';

import { Contact, Hi } from '../components';
import { useScroller } from '../hooks';

const scrollerSettings = {
    isInViewportSettings: {
        modBottom: '-200%',
    },
};

const Home: React.FC = () => {
    const {
        ref: contactRef,
        scroller: contactScroller,
    } = useScroller(scrollerSettings);

    return (
        <>
            <Head>
                <title>Desenvolvedora Julia Ramos</title>
            </Head>
            <Hi contactScroller={contactScroller} />
            <Contact contactRef={contactRef}/>
        </>
    );
};

export default Home;
