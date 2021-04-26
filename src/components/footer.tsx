import React from 'react';
import { Heart } from '@styled-icons/fa-solid/Heart';
import { Coffee } from '@styled-icons/fa-solid/Coffee';
import { Github } from '@styled-icons/fa-brands/Github';
import { LinkedinIn } from '@styled-icons/fa-brands/LinkedinIn';

import theme from '../styles/theme';
import { Email, EmailIcon, FollowMe, Planet, Section, SocialMedia, Background, Text, Container } from '../styles/components/Footer';
import { Separator, Title } from '../styles/components/Shared';
import saturn from '../assets/saturn.png';
import BgStars from '../assets/bg-stars-1.svg'


const Banner: React.FC = () => {
    return (
        <Section>
            <Background>
                <BgStars/>
            </Background>
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
            <Container>
                <Text>Desenvolvido com{' '}
                    <Heart title="Coração" width="16px"/> & <Coffee title="Café" width="18px"/>
                    {' '}por <a
                        href="https://www.linkedin.com/in/juliaramosguedes"
                        title="Perfil no Linkedin da Julia Ramos"
                    ><u>Julia Ramos</u></a>
                </Text>
                <Text>&copy; Copyright 2021 - Todos os direitos reservados</Text>
            </Container>
            <Planet src={saturn}/>
        </Section>
    );
};

export default Banner;
