import styled from 'styled-components';

import theme from '../theme';
import bgStars from '../../assets/bg-stars-2.png';
import juliaRamos from '../../assets/juliaramos.png';
import { lighten } from 'polished';

interface CustomArrowProps {
    direction: string;
}

export const Section = styled.section`
    padding: 84px 24px;
    background: url(${bgStars}) no-repeat top right;
    background-size: 225px;

    @media (min-width: 768px) {
        padding: 144px 24px;
        background-size: 489px 840px;
    }
`;

export const Wrap = styled.div`
    margin: 0 auto;

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        max-width: 580px;
    }

    @media (min-width: 1024px) {
        max-width: 850px;
    }

    .react-multi-carousel-list {
        width: 100%;
    }
`;

export const Dot = styled.div`
    border: 1px solid ${theme.colors.primary};
    border-radius: 50%;
    padding: 4px;
    background: white;
    height: 24px;
    width: 24px;
    margin: 8px;

    div {
        height: 14px;
        width: 14px;
        border-radius: 50%;
    }

    &.active {
        div {
          background-color: ${theme.colors.primary};
        }
    }
`

export const Box = styled.div`
    padding: 24px 0 48px;
`

export const Card = styled.div`
    padding: 24px 36px;
    background-color: white;

    h3 {
        font-weight: bold;
        margin-bottom: 24px;
    }

    button + button {
        margin-left: 16px;
    }

    @media(min-width: 768px) {
        max-width: 535px;
        margin: 0 auto;
    }
`

export const CustomArrow = styled.button`
    position: absolute;
    border: 0;
    background-color: transparent;
    ${({ direction }: CustomArrowProps) => direction === 'right' ? 'right: 0;' : 'left: 0;'}
`
