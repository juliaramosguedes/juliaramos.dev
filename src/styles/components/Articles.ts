import styled from 'styled-components';

import { Title as BaseTitle } from './Shared';
import theme from '../theme';

export const Section = styled.section`
    padding: 84px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    @media (min-width: 768px) {
        padding: 144px 24px;
        max-width: 580px;
    }

    @media (min-width: 1024px) {
        max-width: 850px;
    }
`;

export const Title = styled(BaseTitle)`
    align-self: flex-end;
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

    a {
        text-decoration: underline;
        font-weight: bold;
        transition: color 0.5s;
    }

    a:hover {
        color: ${theme.colors.secondary};
    }
`
