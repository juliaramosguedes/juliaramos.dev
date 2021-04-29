import React, { RefObject } from 'react';
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

interface ContactProps {
    contactRef: RefObject<HTMLElement>
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
    return (
        <Section ref={contactRef}>
            <Stars/>
            <Twinkling/>
            <Clouds/>
            <Title color="white">Contato</Title>
            <Container>
                <Text>Você pode falar comigo através do email</Text>
                <Email href="mailto:hi@juliaramos.dev" title="Email da Julia Ramos"><EmailIcon color="white"
                                                                                               size="40px"/>hi@juliaramos.dev</Email>
            </Container>
            <FollowMe>
                <Text>Me adicione no LinkedIn e acompanhe meu trabalho no Github</Text>
                <SocialMedia>
                    <a href="https://www.linkedin.com/in/juliaramosguedes" title="Perfil no Linkedin da Julia Ramos">
                        <LinkedinIn color={theme.colors.secondary} size="40px" title="Linkedin"/>
                    </a>
                    <Separator height="65px" color={theme.colors.secondary}/>
                    <a href="https://www.github.com/juliaramosguedes" title="Perfil no Github da Julia Ramos">
                        <Github color={theme.colors.secondary} size="40px" title="Github"/>
                    </a>
                </SocialMedia>
            </FollowMe>
            <Footer>
                <Text>Desenvolvido com{' '}
                    <Heart title="Coração" width="16px"/> & <Coffee title="Café" width="18px"/>
                    {' '}por <a
                        href="https://www.linkedin.com/in/juliaramosguedes"
                        title="Perfil no Linkedin da Julia Ramos"
                    >Julia Ramos</a>
                </Text>
                <Text>&copy; Copyright 2021 - Todos os direitos reservados</Text>
                <Planet src={saturn}/>
            </Footer>
        </Section>
    );
};

export default Contact;
