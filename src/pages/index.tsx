import React, { useRef } from 'react';
import Head from 'next/head';

import { Contact, Hi } from '../components';

const Home: React.FC = () => {
    const hiRef = useRef();
    const contactRef = useRef(null);

    const scroller = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            isInViewportSettings: {
                modBottom: '-200%',
            },
        });
    };

    return (
        <>
            <Head>
                <title>Desenvolvedora Julia Ramos</title>
            </Head>
            <Hi hiRef={hiRef} contactScroller={() => scroller(contactRef)} />
            <Contact contactRef={contactRef} />
        </>
    );
};

export default Home;
