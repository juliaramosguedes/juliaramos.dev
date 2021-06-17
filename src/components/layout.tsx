import * as React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "./nav-bar";

type Props = {
    title?: string;
    className?: string;
};

const Layout: React.FunctionComponent<Props> = ({
    children,
    className = "",
    title = "Julia Ramos, desenvolvedora e professora"
}) => (
    <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className={`app-container ${className}`}
    >
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        {children}
    </motion.div>
);

export default Layout;
