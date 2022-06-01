import styled from 'styled-components';

import theme from '../theme';
import bgStars from '../../assets/bg-stars-2.png';

export const Section = styled.section`
    padding: 84px 24px 144px;
    background: url(${bgStars}) no-repeat top left;
    background-size: 225px;
    position: relative;

    @media (min-width: 768px) {
        padding: 120px 24px 164px;
        background-size: 489px 840px;
    }
`;

export const Wrap = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const Text = styled.p`
    margin-top: 104px;

    @media (min-width: 768px) {
        margin-top: 84px;
    }
`;

export const Title = styled.h2`
    z-index: 3;
    position: absolute;
    bottom: -5px;
    left: 14px;
    line-height: 60px;
    color: ${theme.colors.primary};

    strong {
        display: block;
    }

    @media (min-width: 768px) {
        left: -194px;
        strong {
            display: inline;
        }
    }
`;

export const TitleBorderOutline = styled.div`
    width: 145px;
    height: 63px;
    border: 5px solid ${theme.colors.primary};
    background-color: white;
    z-index: 3;
    position: relative;
    top: 64px;
    padding: 14px;

    @media (min-width: 768px) {
        top: 0;
        right: -186px;
        order: 2;
        width: 180px;
        margin-bottom: 36px;
    }
`;

export const Image = styled.div`
    position: absolute;
    right: 0;
    bottom: 32px;
    overflow: hidden;

    z-index: 2;
    width: 110px;
    height: 144px;

    img {
        width: 147px;
        height: 144px;
    }

    @media (min-width: 768px) {
        bottom: 76px;
        width: 120px;
        height: 144px;
    }

    @media (min-width: 1024px) {
        width: 147px;
        height: 144px;
        right: 32px;
    }

    @media (min-width: 1440px) {
        right: 192px;
    }
`;

export const Grid = styled.div`
    margin: 56px 0 16px;
    display: grid;
    grid-template-columns: 256px 256px 256px;
    gap: 16px;

    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        & > :nth-child(1) {
            order: 1;
        }

        & > :nth-child(2) {
            order: 4;
        }

        & > :nth-child(3) {
            order: 7;
        }

        & > :nth-child(4) {
            order: 2;
        }

        & > :nth-child(5) {
            order: 5;
        }

        & > :nth-child(6) {
            order: 8;
        }

        & > :nth-child(7) {
            order: 3;
        }

        & > :nth-child(8) {
            order: 6;
        }

        & > :nth-child(9) {
            order: 9;
        }
    }
`;
