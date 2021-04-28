import React, { RefObject } from 'react';

import { ButtonArrow, Section, Title, TitleBorder, TitleBorderOutline, WrapStar } from '../styles/components/Hi';
import { ColorWhite, Image, ParagraphNoMargin } from '../styles/components/Shared';

import bluePlanet from '../assets/blue-world.png';
import pinkPlanet from '../assets/pink-world.png';
import Star from '../assets/star.svg';
import DoubleArrow from '../assets/double-arrow.svg';

interface HiProps {
    contactScroller: Function
    hiRef: RefObject<HTMLElement>
}

const Hi: React.FC<HiProps> = ({ contactScroller, hiRef }) => {
    return (
        <Section ref={hiRef}>
            <TitleBorderOutline>
                <ParagraphNoMargin>Olá, eu sou a</ParagraphNoMargin>
                <Title>Julia<br/><ColorWhite>Ramos.</ColorWhite></Title>
                <Image src={bluePlanet} right="-80px" bottom="-20px"/>
            </TitleBorderOutline>
            <TitleBorder>
                <Image src={pinkPlanet} left="-40px" bottom="-30px"/>
                <WrapStar>
                    <Star/>
                </WrapStar>
            </TitleBorder>
            <ButtonArrow onClick={() => contactScroller()}>
                <DoubleArrow />
            </ButtonArrow>
        </Section>
    );
};

export default Hi;
