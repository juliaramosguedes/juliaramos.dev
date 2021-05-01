import React, { useRef } from 'react';
import Head from 'next/head';

import { AboutMe, Articles, Contact, Hi, NavBar, Projects, Techs } from '../components';

const Home: React.FC = () => {
    const hiRef = useRef();
    const aboutMeRef = useRef(null);
    const articlesRef = useRef(null);
    const contactRef = useRef(null);
    const projectsRef = useRef(null);
    const techsRef = useRef(null);

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
                <title>Julia Ramos, desenvolvedora e professora</title>
            </Head>
            <NavBar refs={{ aboutMeRef, articlesRef, contactRef, projectsRef, techsRef }} scroller={scroller} />
            <Hi hiRef={hiRef} contactScroller={() => scroller(aboutMeRef)} />
            <AboutMe aboutMeRef={aboutMeRef} />
            <Techs techsRef={techsRef} />
            <Projects projectsRef={projectsRef} />
            <Articles articlesRef={articlesRef} />
            <Contact contactRef={contactRef} />
        </>
    );
};

export default Home;
