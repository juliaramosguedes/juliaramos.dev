import React from 'react';

import { Grid, Image, Section, Text, Title, TitleBorderOutline, Wrap } from '../styles/components/Techs';
import Card from './card';

import moon from '../assets/moon.png';

const Techs: React.FC = (props) => {
    return (
        <Section {...props} id="techs">
            <Wrap>
                <TitleBorderOutline>
                    <Title><strong>Tecno&nbsp;</strong>logias</Title>
                </TitleBorderOutline>
                <Text>
                    Sou desenvolvedora web full stack, apaixonada por Javascript e sua stack.
                    Ex-aluna do bootcamp de desenvolvimento web da Ironhack e atual aluna do bootcamp Ignite da
                    Rocketseat.
                </Text>
                <Grid>
                    <Card>HTML, CSS, Bootstrap, <br/>Git, Github</Card>
                    <Card>Docker, <br/>MongoDB, <br/>MySql, <br/>Postgres</Card>
                    <Card>Programação funcional, Programação orientada a objetos</Card>
                    <Card>Javascript, Typescript, <br/>Python, Kotlin</Card>
                    <Card>Mongoose, <br/>TypeORM, SqlAlchemy, Springboot</Card>
                    <Card>Desenvolvimento orientado a testes</Card>
                    <Card>React, Firebase, Node, Express, <br/>Next, Jest</Card>
                    <Card>REST, <br/>Protocol Buffer, <br/>gRPC, <br/>GraphQL</Card>
                    <Card>Domain-driven design, <br/>Model–view–controller</Card>
                </Grid>
                <Card alignCenter>Metodologias ágeis</Card>
            </Wrap>
            <Image>
                <img src={moon} title="Lua" alt="Lua"/>
            </Image>
        </Section>
    );
};

export default Techs;
