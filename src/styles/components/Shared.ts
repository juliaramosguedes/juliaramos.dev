import styled from 'styled-components';
import theme from '../theme';

interface ISeparatorDTO {
    color?: string;
    transparent?: boolean;
    height: string;
}

interface ITitleDTO {
    align?: string;
    color?: string;
}


export const Section = styled.section`
    padding: 90px 36px 120px;

    @media (min-width: 1024px) {
        padding: 90px 48px 150px;
    }
`;

export const Container = styled.div`
    max-width: 1076px;
    margin: 0 auto;
`;

export const Flex = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        flex-flow: row nowrap;
    }
`;

export const Card = styled.div`
    max-width: 300px;

    @media (min-width: 1024px) {
        max-width: 450px;
    }
`;

export const Button = styled.button`
    border: 1px solid #ffffff;
    background-color: transparent;
    padding: 12px 32px;
    color: #ffffff;
    margin: 24px 0 64px;
    font-size: 16px;
    text-align: center;
    max-width: 270px;
    transition: border 0.5s;
    transition: color 0.3s;

    & :hover {
        border: 1px solid #FFD500;
        color: #FFD500;
    }
`;

export const ColorWhite = styled.span`
    color: #ffffff
`;

export const ColorYellow = styled.span`
    color: ${theme.colors.secondary}
`;

export const ColorPurple = styled.span`
    color: ${theme.colors.primary}
`;

export const ColorGray = styled.span`
    color: ${theme.colors.textLight}
`;

export const ParagraphNoMargin = styled.p`
    margin: 0;
`;

export const Title = styled.h2`
    ${({ color, align }: ITitleDTO) =>
        `color: ${color || theme.colors.primary};
        border: 5px solid ${color || theme.colors.primary};
        text-align: ${align || 'center'};`
    }
    width: 100%;
    max-width: 380px;
    padding: 16px;
    z-index: 2;
`;

export const Separator = styled.div`
    ${({ height }: ISeparatorDTO) => `height: ${height};`}
    ${({ transparent, color }: ISeparatorDTO) => `border: ${transparent ? 0 : "1px solid " + color};`}
`;
