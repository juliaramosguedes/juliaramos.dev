import React from "react";
import { useRouter } from "next/router";

import {
    ImageFrame,
    Section,
    Slogan,
    Texts,
    Title,
    TitleBorderOutline,
    Wrap,
} from '../styles/components/AboutMe';
import { Button, ColorYellow } from '../styles/components/Shared';

import Star from '../assets/star.svg';

const AboutMe: React.FC = (props) => {
    const router = useRouter();

    return (
        <Section id="about-me" {...props}>
            <Wrap>
                <TitleBorderOutline>
                    <Title><strong>Sobre</strong><br/> mim</Title>
                    <ImageFrame/>
                </TitleBorderOutline>
                <Texts>
                    <p>Sou engenheira de software na Pitágoras Ampli, uma startup da Kroton Educacional, e professora
                        assistente de desenvolvimento web na Digital House Brasil.
                    </p>
                    <p>Meu propósito é abrir portas para que as pessoas tenham melhores oportunidades de vida e escolhi
                        fazer isso através da minha expertise em tecnologia aplicada ao mercado de educação.
                    </p>
                    <p>Vegana por amor aos animais e à natureza, defensora da diversidade, entusiasta em artes marciais
                        chinesas, ficção científica e violão. Valorizo a simplicidade e as sutilezas da vida.
                    </p>
                    <p>Eterna aprendiz, estou constantemente me atualizando. Como profissional, acredito que as
                        habilidades comportamentais são tão importantes quanto as técnicas.
                    </p>
                    <Button onClick={() => router.push("/CV")} title="Currículo da Julia Ramos">Veja meu currículo</Button>
                </Texts>
                <Slogan>
                    <Star/>
                    <h3>Um dos meus lemas é<br/>
                        <ColorYellow>
                            <strong>"Você escreve código para outras pessoas poderem entender."</strong>
                        </ColorYellow>
                    </h3>
                </Slogan>
            </Wrap>
        </Section>
    );
};

export default AboutMe;
