import React, { RefObject } from 'react';

import {
    ImageFrame,
    Section,
    Slogan,
    Texts,
    Title,
    TitleBorderOutline,
    Wrap,
} from '../styles/components/AboutMe';
import { ColorYellow } from '../styles/components/Shared';

import Star from '../assets/star.svg';

interface AboutMeProps {
    aboutMeRef: RefObject<HTMLElement>
}

const AboutMe: React.FC<AboutMeProps> = ({ aboutMeRef }) => {
    return (
        <Section ref={aboutMeRef}>
            <Wrap>
                <TitleBorderOutline>
                    <Title><strong>Sobre</strong><br/>mim</Title>
                    <ImageFrame/>
                </TitleBorderOutline>
                <Texts>
                    <p>Sou engenheira de software na Pitágoras Ampli, uma startup da Kroton Educacional, e professora
                        assistente
                        de desenvolvimento web na Digital House Brasil.
                    </p>
                    <p>Meu propósito é abrir portas para que as pessoas tenham melhores oportunidades de vida e escolhi
                        fazer
                        isso através da minha expertise em tecnologia aplicada ao mercado de educação.
                    </p>
                    <p>Vegana por amor aos animais e a natureza, defensora da diversidade, entusiasta em artes marciais
                        chinesas, ficção científica e violão. Valorizo a simplicidade e as sutilezas da vida.
                    </p>
                    <p>Eterna aprendiz, estou constantemente me atualizando. Como profissional, acredito que as
                        habilidades
                        comportamentais são tão importantes quanto as técnicas.
                    </p>
                </Texts>
                <Slogan>
                    <Star/>
                    <h3>Um dos meus lemas é <br/><ColorYellow><strong>"Você escreve código para outras pessoas poderem
                        entender."</strong></ColorYellow></h3>
                </Slogan>
            </Wrap>
        </Section>
    );
};

export default AboutMe;
