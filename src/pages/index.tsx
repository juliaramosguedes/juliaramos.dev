import React, { useRef, useState } from "react";

import { AboutMe, Articles, Contact, Hi, Layout, Projects, Techs } from "../components";

const Home: React.FC = () => (
    <Layout>
        <Hi/>
        <AboutMe/>
        <Techs/>
        <Projects/>
        <Articles/>
        <Contact/>
    </Layout>
);

export default Home;
