import React, { RefObject } from 'react';
import Particles from 'react-particles-js';

import {
    ButtonArrow,
    Container,
    Section,
    Title,
    TitleBorder,
    TitleBorderOutline,
    WrapStar,
} from '../styles/components/Hi';
import { ColorWhite, Image, ParagraphNoMargin } from '../styles/components/Shared';

import bluePlanet from '../assets/blue-world.png';
import pinkPlanet from '../assets/pink-world.png';
import Star from '../assets/star.svg';
import DoubleArrow from '../assets/double-arrow.svg';

interface HiProps {
    contactScroller: Function;
    hiRef: RefObject<HTMLElement>;
}

const Hi: React.FC<HiProps> = ({ contactScroller, hiRef }) => {
    return (
        <Section ref={hiRef}>
            <Container>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 150,
                                density: {
                                    enable: true,
                                    value_area: 1803.4120608655228,
                                },
                            },
                            color: {
                                value: '#ffffff',
                            },
                            shape: {
                                type: 'triangle',
                                stroke: {
                                    width: 3,
                                    color: '#000000',
                                },
                                polygon: {
                                    nb_sides: 4,
                                },
                                image: {
                                    src: 'img/github.svg',
                                    width: 100,
                                    height: 100,
                                },
                            },
                            opacity: {
                                value: 0.4008530152163807,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 1.5,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable: true,
                                distance: 0,
                                color: '#ffffff',
                                opacity: 0.3687847739990702,
                                width: 0.6413648243462091,
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            detect_on: 'window',
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                                onclick: {
                                    enable: true,
                                    mode: 'bubble',
                                },
                                resize: true,
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1,
                                    },
                                },
                                bubble: {
                                    distance: 150,
                                    size: 5,
                                    duration: 1.5,
                                    opacity: 8,
                                },
                                repulse: {
                                    distance: 75,
                                    duration: 0.4,
                                },
                                push: {
                                    particles_nb: 4,
                                },
                                remove: {
                                    particles_nb: 2,
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                />
            </Container>
            <TitleBorderOutline>
                <ParagraphNoMargin>Olá, eu sou a</ParagraphNoMargin>
                <Title>Julia<br/><ColorWhite>Ramos.</ColorWhite></Title>
                <Image src={bluePlanet} right="-80px" bottom="-20px" title="Planeta azul" alt="Planeta azul"/>
            </TitleBorderOutline>
            <TitleBorder>
                <Image src={pinkPlanet} left="-40px" bottom="-30px" title="Planeta rosa" alt="Planeta rosa"/>
                <WrapStar>
                    <Star/>
                </WrapStar>
            </TitleBorder>
            <ButtonArrow onClick={() => contactScroller()}>
                <DoubleArrow/>
            </ButtonArrow>
        </Section>
    );
};

export default Hi;
