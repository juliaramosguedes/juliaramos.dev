import styled from 'styled-components';
import theme from '../theme';

interface CardProps {
    alignCenter: boolean;
}

export const Card = styled.div`
    max-width: 256px;
    border: 1px solid ${theme.colors.secondary};
    border-radius: 8px;
    background-color: white;
    padding: 36px 24px;
    position: relative;
    z-index: 3;
    ${({ alignCenter }: CardProps) => alignCenter && `
    max-width: 100%;
    h3 {
        text-align: center;
    };
    `}

    svg {
        position: absolute;
        top: 18px;
        right: 18px;
        ${({ alignCenter }: CardProps) => alignCenter && ` top: 36px;`}
    }
`;
