import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'
import InConstruction from '../assets/in-construction.svg'
import { Container, Sling, Text } from '../styles/pages/Home'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Next.js + Typescript</title>
            </Head>
            <Sling>
                <InConstruction />
            </Sling>
            <Container>
                <Logo />
                <h1>Next + Typescript</h1>
                <Text>
                    Template por Julia Ramos<br/>
                    Me siga no <a href="https://www.linkedin.com/in/julia-ramos-guedes"><u>Linkedin</u></a>
                </Text>
            </Container>
        </>
    )
}

export default Home
