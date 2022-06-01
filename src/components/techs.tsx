import React from 'react';

import { Grid, Image, Section, Text, Title, TitleBorderOutline, Wrap } from '../styles/components/Techs';
import Card from './card';

import moon from '../assets/moon.png';

const Techs: React.FC = (props) => {
    return (
        <Section {...props} id="techs">
            <Wrap>
                <TitleBorderOutline>
                    <Title><strong>Techno&nbsp;</strong>logies</Title>
                </TitleBorderOutline>
                <Text>
                    I'm a full-stack web developer, passionate about Javascript and its stack. A former student of Ironhack's Web Development bootcamp and Rocketseat's Ignite bootcamp and current student of Erick Wendell's Javascript Expert bootcamp.
                </Text>
                <Grid>
                    <Card>HTML, CSS, <br/>ChakraUI, Git, Github</Card>
                    <Card>Docker, <br/>MongoDB, <br/>MySql, <br/>Postgres</Card>
                    <Card>Functional programming, Object oriented programming</Card>
                    <Card>Javascript, Typescript, <br/>Python, Kotlin</Card>
                    <Card>Mongoose, <br/>TypeORM, SqlAlchemy, Springboot</Card>
                    <Card>Test driven development</Card>
                    <Card>React, Firebase, Node, Express, <br/>Next, Jest</Card>
                    <Card>REST, <br/>Protocol Buffer, <br/>gRPC, <br/>GraphQL</Card>
                    <Card>Domain-driven design, <br/>Model–view–controller</Card>
                </Grid>
                <Card alignCenter>Agile methodologies</Card>
            </Wrap>
            <Image>
                <img src={moon} title="Lua" alt="Lua"/>
            </Image>
        </Section>
    );
};

export default Techs;
