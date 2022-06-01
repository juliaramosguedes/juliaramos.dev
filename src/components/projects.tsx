import React, { useRef, useState } from 'react';
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
        <CustomArrowStyle direction={direction} {...restProps} aria-label={`Go to ${direction === 'right' ? 'right' : 'left'}`}>
            <Icon size="40px" color={theme.colors.text}/>
        </CustomArrowStyle>
    );
};

const Projects: React.FC = (props) => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => setShowModal(!showModal);

    const descriptions = [
        {
            project: 'Consultoria Educação',
            description: [
                `Consultoria Educação is a sales platform for undergraduate courses that pays cash prizes for enrollments.`,
                `I participated in the development of this project for Kroton since its beginning, working solo under the supervision of Marcio Hariki.`,
                `The project was developed with React and BaaS (Backend as a Service) with Node and Firebase (Authentication, Firestore, Functions), hosted on AWS. A landing page and a login area with a dashboard were created, among other things.`,
                `Currently, I am no longer part of the project development. This is the reason why I chose not to disclose the link since the current project has already been modified. I share with you the project records from when I was still responsible for its development.`,
            ],
            buttons: [{ text: 'See video', onClick: toggleModal }],
        },
        {
            project: 'Tic Task',
            description: [
                `Tic Task is a web app that allows you to use the Pomodoro technique to increase productivity in studies and work.`,
                `The idea for this project came from the need for a tool to help improve performance in my studies alongside the desire of developing a new project.`,
                `In this project, I was responsible for the development (with React and Firebase), Dedicio Coelho for the UI, and Poliana Branti for the UX.`,
            ],
            buttons: [
                { text: 'Github', url:'https://github.com/juliaramosguedes/tictask' },
                { text: 'Go to the website', url:'https://www.tictask.app/' },
            ],
        },
        {
            project: 'Voluntei',
            description: [
                `I have created a fictional e-commerce platform as a project to complete the bootcamp at Ironhack, along with two more friends (Luan Perosa and Marcus Brandão).`,
                `We used the knowledge of HTML, CSS, Bootstrap, Javascript, Node, React, Git and Github acquired over the six months the course took, and, instead of using what we learned from Express, Mongo, and Mongoose, we challenged ourselves to learn and implement BaaS (Backend as a Service) Firebase, in addition to PayPal and Nano payment methods.`,
                `This project was very important for our professional development. We solidified our knowledge, learned new technologies, worked as a team, and exercised the much-needed resilience for developers. We were glad to see the result was impressive, being among the top 3.`,
            ],
            buttons: [
                {
                    text: 'Github',
                    url:'https://github.com/juliaramosguedes/project-voluntei-ecommerce',
                }, { text: 'Go to the website', url:'https://voluntei.juliaramos.dev/' },
            ],
        },
        {
            project: 'Dungeons & Dragons',
            description: [
                `This project has a piece of my heart, for it is my first website. I started the bootcamp at Ironhack from scratch and as my first project, I have created a javascript web game that simulates a tabletop RPG game.`,
                `In this project, I used the knowledge I acquired after 1 month of HTML, CSS, Bootstrap, Javascript, Git, and Github course.`,
                `A tabletop RPG lover since childhood, I present my web version of Dungeons & Dragons.`,
                `My intention is to provide a similar experience to the one you have when playing the original game for online players by recreating the game’s atmosphere and drawing the player's imagination into immersion in the character and story.`,
                `The purpose of having created the game is to stimulate the player's curiosity so more people get familiar with the traditional version.`,
            ],
            buttons: [
                {
                    text: 'Github',
                    url:'https://github.com/juliaramosguedes/project-dungeons-dragons',
                }, { text: 'Go to the website', url:'https://rpg.juliaramos.dev/' },
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
                        const key = `${text} of project ${project}`;
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
        <Section {...props} id="projects">
            <Wrap>
                <Title color={theme.colors.primary}>Projects</Title>
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
                <Modal close={toggleModal} modalRef={modalRef} title="Project Consultoria Educação">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OrtZi4Ei_7U"
                            title="Consultoria Educação video" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </Modal>}
            </Wrap>
        </Section>
    );
};

export default Projects;
