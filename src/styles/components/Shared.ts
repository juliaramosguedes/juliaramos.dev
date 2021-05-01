import styled from 'styled-components';
import { lighten } from 'polished';

import theme from '../theme';

interface ISeparatorDTO {
    color?: string;
    transparent?: boolean;
    height?: string;
}

interface ITitleDTO {
    align?: string;
    color?: string;
    bgColor?: string;
}

interface IImageDTO {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
}

export const Section = styled.section`
    padding: 90px 36px 120px;

    @media (min-width: 1024px) {
        padding: 90px 48px 150px;
    }
`;

export const Button = styled.button`
    border: 1px solid ${theme.colors.primary};
    background-color: transparent;
    padding: 8px;
    color: ${theme.colors.primary};
    margin: 24px 0 0;
    font-size: 18px;
    text-align: center;
    transition: background-color 0.8s;
    width: 100%;

    &:hover {
        background-color: ${lighten(0.3, theme.colors.primary)};
        color: white;
    }

    @media(min-width: 768px) {
        max-width: 160px;
    }
`;

export const ColorWhite = styled.span`
    color: #ffffff
`;

export const ColorYellow = styled.span`
    color: ${theme.colors.secondary}
`;

export const ParagraphNoMargin = styled.p`
    margin: 0;
`;

export const Title = styled.h2`
    ${({ color, align, bgColor }: ITitleDTO) =>
        `color: ${color || theme.colors.primary};
        border: 5px solid ${color || theme.colors.primary};
        text-align: ${align || 'center'};
        background-color: ${bgColor || 'transparent'};`
    }
    width: 100%;
    z-index: 2;
    padding: 14px;

    @media(min-width: 768px) {
        font-weight: bold;
        max-width: 260px;
        padding: 0;
    }
`;

export const Separator = styled.div`
    ${({ height }: ISeparatorDTO) => `height: ${height};`}
    ${({ transparent, color }: ISeparatorDTO) => `border: ${transparent ? 0 : "1px solid " + color};`}
`;

export const Image = styled.img`
    z-index: 1;
    position: absolute;
    overflow: hidden;
    ${({bottom}: IImageDTO) => bottom && `bottom: ${bottom}`};
    ${({top}: IImageDTO) => top && `top: ${top}`};
    ${({left}: IImageDTO) => left && `left: ${left}`};
    ${({right}: IImageDTO) => right && `right: ${right}`};
`
