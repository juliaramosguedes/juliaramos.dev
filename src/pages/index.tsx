import React, { useRef } from 'react';
import Head from 'next/head';

import { AboutMe, Contact, Hi, NavBar } from '../components';

const Home: React.FC = () => {
    const hiRef = useRef();
    const contactRef = useRef(null);
    const aboutMeRef = useRef(null);

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
            <NavBar refs={{ aboutMeRef, contactRef }} scroller={scroller} />
            <Hi hiRef={hiRef} contactScroller={() => scroller(aboutMeRef)} />
            <AboutMe aboutMeRef={aboutMeRef} />
            <Contact contactRef={contactRef} />
        </>
    );
};

export default Home;
