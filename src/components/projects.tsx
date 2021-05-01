import React, { useRef, useState, RefObject } from 'react';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Box, Card, CustomArrow as CustomArrowStyle, Dot, Section, Wrap } from '../styles/components/Projects';
import { Button, Title } from '../styles/components/Shared';
import Modal from './modal';
import theme from '../styles/theme';

const CustomDots = (props) => {
    const { carouselState, onClick, active, ...restProps } = props;

    return (
        <li
            {...restProps}
            className={active ? 'active' : 'inactive'}
            onClick={onClick}
        >
            <Dot className={active ? 'active' : 'inactive'}>
                <div/>
            </Dot>
        </li>
    );
};

const CustomArrow = ({ direction, Icon, ...props }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
        ...restProps
    } = props;

    return (
        <CustomArrowStyle direction={direction} {...restProps} aria-label={`Navegar para ${direction === 'right' ? 'direita' : 'esquerda'}`}>
            <Icon size="40px" color={theme.colors.text}/>
        </CustomArrowStyle>
    );
};

interface ProjectsProps {
    projectsRef: RefObject<HTMLElement>
}

const Projects: React.FC<ProjectsProps> = ({ projectsRef }) => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => setShowModal(!showModal);

    const descriptions = [
        {
            project: 'Consultoria Educação',
            description: [
                `O Consultoria Educação é uma plataforma de vendas de cursos de graduação, que paga premiações em dinheiro pelas matrículas realizadas.`,
                `Eu participei do desenvolvimento desse projeto para a Kroton desde o seu início, atuando sozinha sob a supervisão do Marcio Hariki.`,
                `O projeto foi desenvolvido com React e BaaS (Backend as a Service) com Node e Firebase (Authentication, Firestore, Functions), hospedado na AWS. Foram criadas uma landing page e uma área logada com dashboard, entre outras coisas.`,
                `Atualmente, não faço mais parte do desenvolvimento do projeto. Por isso optei por não divulgar o link, já que o projeto atual já foi modificado. Compartilho com vocês os registros do projeto de quando ainda era responsável pelo seu desenvolvimento.`,
            ],
            buttons: [{ text: 'Ver vídeo', onClick: toggleModal }],
        },
        {
            project: 'Tic Task',
            description: [
                `O Tic Task é um web app para você usar a técnica Pomodoro como forma de aumentar a produtividade nos estudos e trabalho.`,
                `A ideia desse projeto surgiu da necessidade de uma ferramenta para melhorar o desempenho nos meus estudos combinada à vontade de desenvolver um novo projeto.`,
                `Nesse projeto, eu fiquei responsável pelo desenvolvimento (com React e Firebase), o Dedicio Coelho por UI e a Poliana Branti por UX.`,
            ],
            buttons: [
                { text: 'Github', url:'https://github.com/juliaramosguedes/tictask' },
                { text: 'Ir para o site', url:'https://www.tictask.app/' },
            ],
        },
        {
            project: 'Voluntei',
            description: [
                `Como projeto de conclusão do bootcamp na Ironhack, em conjunto com mais dois amigos (Luan Perosa e Marcus Brandão), criamos um e-commerce fictício.`,
                `Utilizamos o conhecimento adquirido ao longo dos seis meses de curso de HTML, CSS, Bootstrap, Javascript, Node, React, Git e Github e, ao invés de utilizar o que aprendemos de Express, Mongo e Mongoose, nos desafiamos a aprender e implementar BaaS (Backend as a Service) Firebase, além dos meios de pagamento PayPal e Nano.`,
                `Esse projeto foi muito importante para o nosso desenvolvimento profissional. Solidificamos nossos conhecimentos, aprendemos novas tecnologias, trabalhamos em equipe, exercitamos a resiliência tão essencial para o trabalho de um desenvolvedor e o resultado foi surpreendente, ficando entre os 3 melhores.`,
            ],
            buttons: [
                {
                    text: 'Github',
                    url:'https://github.com/juliaramosguedes/project-voluntei-ecommerce',
                }, { text: 'Ir para o site', url:'https://voluntei.juliaramos.dev/' },
            ],
        },
        {
            project: 'Dungeons & Dragons',
            description: [
                `Esse projeto é meu xodózinho, pois é o meu primeiro site. Eu comecei o bootcamp na Ironhack partindo do zero e como meu primeiro projeto, criei um jogo web em javascript que simula uma partida de RPG de mesa.`,
                `Nesse projeto utilizei os conhecimentos que adquiri após 1 mês de curso de HTML, CSS, Bootstrap, Javascript, Git e Github.`,
                `Amante de RPG de mesa desde a infância, eu apresento minha versão web de Dungeons & Dragons.`,
                `Minha intenção é proporcionar uma experiência semelhante ao jogo original para os jogadores online, ao recriar a atmosfera do jogo e conduzir a imaginação do jogador para uma imersão na personagem e na história.`,
                `O objetivo de ter criado o jogo é despertar a curiosidade do jogador em conhecer a versão tradicional.`,
            ],
            buttons: [
                {
                    text: 'Github',
                    url:'https://github.com/juliaramosguedes/project-dungeons-dragons',
                }, { text: 'Ir para o site', url:'https://rpg.juliaramos.dev/' },
            ],
        },
    ];

    const TestmonialCards = () =>
        descriptions.map(({ project, description, buttons }, index) => (
            <Box key={`description-card-${index}`}>
                <Card>
                    <h3>{project}</h3>
                    {description.map((text, index) => (<p
                        key={`${project.replace(' ', '-')}-description-${index}`}>{text}</p>))}
                    {buttons.map(({ text, onClick, url }) => {
                        const key = `${text} do projeto ${project}`;
                        return (
                            <>
                                {url && !onClick ?
                                    <a href={url} title={key} key={key}>
                                        <Button>
                                            {text}
                                        </Button>
                                    </a>
                                    :
                                    <Button onClick={onClick} title={key} key={key}>{text}</Button>
                                }
                            </>
                        );
                    })}
                </Card>
            </Box>
        ));

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Section ref={projectsRef}>
            <Wrap>
                <Title color={theme.colors.primary}>Projetos</Title>
                <Carousel
                    responsive={responsive}
                    arrows={true}
                    customDot={<CustomDots/>}
                    showDots={true}
                    customRightArrow={<CustomArrow direction="right" Icon={ArrowIosForwardOutline}/>}
                    customLeftArrow={<CustomArrow direction="left" Icon={ArrowIosBackOutline}/>}
                >
                    {TestmonialCards()}
                </Carousel>
                {showModal &&
                <Modal close={toggleModal} modalRef={modalRef} title="Projeto Consultoria Educação">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OrtZi4Ei_7U"
                            title="Video do projeto Consultoria Educação" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Modal>}
            </Wrap>
        </Section>
    );
};

export default Projects;
