import styled from 'styled-components';

import theme from '../theme';
import bgStars from '../../assets/bg-stars-2.png';
import juliaRamos from '../../assets/juliaramos.png';

export const Section = styled.section`
    padding: 84px 24px;

    background: url(${bgStars}) no-repeat top right;
    background-size: 225px;

    @media (min-width: 768px) {
        padding: 120px 24px;
        background-size: 489px 840px;
    }
`;

export const Wrap = styled.div`
    max-width: 945px;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: flex;
        position: relative;
    }

`;

export const Texts = styled.div`
    margin-top: 64px;

    @media (min-width: 768px) {
        order: 1;
        max-width: 400px;
        margin-top: -64px;
    }

    @media (min-width: 1024px) {
        max-width: 535px;
    }
`;

export const Title = styled.h1`
    z-index: 3;
    position: absolute;
    bottom: -5px;
    left: 14px;
    line-height: 80px;
    color: ${theme.colors.primary};
`;

export const TitleBorderOutline = styled.div`
    width: 180px;
    height: 82px;
    border: 5px solid ${theme.colors.primary};
    background-color: white;
    z-index: 3;
    position: relative;
    padding: 14px;
    margin: 0 auto;

    @media (min-width: 768px) {
        order: 2;
        width: 190px;
    }

    @media (min-width: 1024px) {
        order: 2;
        width: 240px;
        height: 85px;
    }
`;

export const ImageFrame = styled.div`
    width: 117px;
    height: 105px;
    position: absolute;
    top: 15px;
    left: 125px;
    background: white url(${juliaRamos}) no-repeat top center;
    background-size: 100px 100px;
    border: 5px solid ${theme.colors.text};

    @media (min-width: 1024px) {
        top: 12px;
        left: 150px;
    }
`;

export const Slogan = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg {
        margin: 32px 0;
    }

    h3 {
        text-align: center;
    }

    @media (min-width: 768px) {
        order: 2;
        position: absolute;
        top: 48px;
        right: 15px;
        max-width: 220px;
    }

    @media (min-width: 1024px) {
        top: 48px;
        right: 8px;
        max-width: 320px;
    }
`;
