import React, { RefObject } from 'react';

import { Grid, MoreArticles, Section, Title, TitleBorderOutline, Wrap } from '../styles/components/Articles';
import { CursorClick } from '@styled-icons/heroicons-solid/CursorClick';
import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill';
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock';
import { Cake } from '@styled-icons/material-sharp/Cake';
import { MapsHomeWork } from '@styled-icons/material-rounded/MapsHomeWork';
import WebSite from './web-site';

interface AboutMeProps {
    articlesRef: RefObject<HTMLElement>
}

const Techs: React.FC<AboutMeProps> = ({ articlesRef }) => {
    return (
        <Section ref={articlesRef}>
            <Wrap>
                <TitleBorderOutline>
                    <Title>Artigos</Title>
                </TitleBorderOutline>
                <Grid>
                    <WebSite Icon={CursorClick}
                             url="https://juliaramosguedes.medium.com/quero-ser-dev-e-agora-202d2fb38a8a"
                             title="Artigo Quero ser dev, e agora?">Quero ser dev, e agora?</WebSite>
                    <WebSite Icon={Calendar}
                             url="https://juliaramosguedes.medium.com/fiz-o-bootcamp-da-ironhack-bcb59d7d7ec4"
                             title="Artigo Como foi meu primeiro bootcamp com a Ironhack">Como foi meu primeiro bootcamp
                        com a Ironhack</WebSite>
                    <WebSite Icon={MapsHomeWork}
                             url="https://juliaramosguedes.medium.com/home-office-e-ead-%C3%A9-bem-melhor-do-que-eu-imaginava-d747a96b66d1"
                             title="Artigo Home Office e EAD é bem melhor do que eu imaginava">Home Office e EAD é bem
                        melhor do que eu imaginava</WebSite>
                    <WebSite Icon={PeopleFill}
                             url="https://juliaramosguedes.medium.com/o-que-podemos-fazer-pela-diversidade-na-tecnologia-76a41467b8d2"
                             title="Artigo O que podemos fazer pela diversidade na tecnologia?">O que podemos fazer pela
                        diversidade na tecnologia?</WebSite>
                    <WebSite Icon={CodeBlock} url="https://www.digitalhouse.com/br/blog/o-que-e-typescript"
                             title="Artigo O que é typescript? Aprenda agora sobre tipagem">O que é typescript? Aprenda
                        agora sobre tipagem</WebSite>
                    <WebSite Icon={Cake}
                             url="https://juliaramosguedes.medium.com/primeiro-ano-como-engenheira-de-software-ff62aa03fc0b"
                             title="Artigo Primeiro ano como engenheira de software">Primeiro ano como engenheira de
                        software</WebSite>
                </Grid>
                <MoreArticles>
                    <a href="https://juliaramosguedes.medium.com/" title="Mais artigos por Julia Ramos"
                       aria-label="Mais artigos por Julia Ramos">Confira mais em Medium</a>
                </MoreArticles>
            </Wrap>
        </Section>
    );
};

export default Techs;
