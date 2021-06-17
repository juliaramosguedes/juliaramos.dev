import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from '../styles/global'
import {ThemeProvider} from "styled-components";
import theme from "../styles/theme";


const handExitComplete = (): void => {
    if (typeof window !== "undefined") {
        const hashId = window.location.hash;

        if (hashId) {
            const element = document.querySelector(hashId);

            element?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
            });
        }
    }
};

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element  => {
    const router = useRouter();
    return (
        <ThemeProvider theme={theme}>
            <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <GlobalStyle />
        </ThemeProvider>
    );
};
export default App;
