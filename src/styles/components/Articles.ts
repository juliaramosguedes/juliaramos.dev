import styled from 'styled-components';

import theme from '../theme';

export const Section = styled.section`
    padding: 84px 24px 144px;

    @media (min-width: 768px) {
        padding: 164px 24px 144px;
    }
`;

export const Wrap = styled.div`
    max-width: 800px;
    margin: 0 auto;
    position: relative;
`;

export const Title = styled.h1`
    z-index: 3;
    position: absolute;
    bottom: -5px;
    left: 14px;
    line-height: 80px;
    color: ${theme.colors.primary};

    @media(min-width: 768px) {
        font-weight: bold;
    }
`;

export const TitleBorderOutline = styled.div`
    width: 100%;
    height: 82px;
    border: 5px solid ${theme.colors.primary};
    background-color: white;
    z-index: 3;
    position: relative;
    top: 0;
    padding: 14px;

    @media (min-width: 768px) {
        position: absolute;
        max-width: 235px;
        right: 0;
        top: -124px;
    }

    @media (min-width: 1024px) {
        max-width: 300px;
    }
`;

export const Grid = styled.div`
    margin: 56px auto 16px;
    display: grid;
    grid-template-columns: 256px;
    gap: 16px;
    max-width: 256px;
    align-items: center;

    @media(min-width: 768px) {
        grid-template-columns: 256px 256px;
        max-width: 528px;
    }

    @media(min-width: 1024px) {
        grid-template-columns: 256px 256px 256px;
        max-width: 800px;
    }
`;

export const MoreArticles = styled.div`
    margin: 36px 0 0;
    font-size: 24px;
    display: flex;
    justify-content: center;

    a {
        text-decoration: underline;
        font-weight: bold;
    }
`
