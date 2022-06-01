import React from 'react';
import { Heart } from '@styled-icons/fa-solid/Heart';
import { Coffee } from '@styled-icons/fa-solid/Coffee';
import { Github } from '@styled-icons/fa-brands/Github';
import { LinkedinIn } from '@styled-icons/fa-brands/LinkedinIn';

import theme from '../styles/theme';
import {
    Clouds,
    Container,
    Email,
    EmailIcon,
    FollowMe,
    Footer,
    Planet,
    Section,
    SocialMedia,
    Stars,
    Text,
    Twinkling,
} from '../styles/components/Contact';
import { Separator, Title } from '../styles/components/Shared';
import saturn from '../assets/saturn.png';

const Contact: React.FC = (props) => {
    return (
        <Section {...props} id="contact">
            <Stars/>
            <Twinkling/>
            <Clouds/>
            <Title color="white">Contact</Title>
            <Container>
                <Text>You can talk to me via email</Text>
                <Email href="mailto:hi@juliaramos.dev" title="Julia Ramos's e-mail"><EmailIcon color="white"
                                                                                               size="40px"/>hi@juliaramos.dev</Email>
            </Container>
            <FollowMe>
                <Text>Add me on LinkedIn and follow my work on Github</Text>
                <SocialMedia>
                    <a href="https://www.linkedin.com/in/juliaramosguedes" title="Julia Ramos' Linkedin Profile">
                        <LinkedinIn color={theme.colors.secondary} size="40px" title="Linkedin"/>
                    </a>
                    <Separator height="65px" color={theme.colors.secondary}/>
                    <a href="https://www.github.com/juliaramosguedes" title="Julia Ramos' Github Profile">
                        <Github color={theme.colors.secondary} size="40px" title="Github"/>
                    </a>
                </SocialMedia>
            </FollowMe>
            <Footer>
                <Text>Developed with{' '}
                    <Heart title="Heatr" width="16px"/> & <Coffee title="Coffee" width="18px"/>
                    {' '}by <a
                        href="https://www.linkedin.com/in/juliaramosguedes"
                        title="Julia Ramos' Linkedin Profile"
                    >Julia Ramos</a>
                </Text>
                <Text>&copy; Copyright 2021 - All rights reserved</Text>
                <Planet src={saturn} title="Planet" alt="Planet similar to Saturn" />
            </Footer>
        </Section>
    );
};

export default Contact;
