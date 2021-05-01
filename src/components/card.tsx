import React, { ReactNode } from 'react';

import { Card as CardStyle } from '../styles/components/Card';
import { CheckCircle } from '@styled-icons/heroicons-outline/CheckCircle';
import theme from '../styles/theme';

interface CardProps {
    alignCenter?: boolean;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ alignCenter, children }) => {
    return (
        <CardStyle alignCenter={alignCenter}>
            <CheckCircle size="30px" color={theme.colors.primary} />
            <h3>{children}</h3>
        </CardStyle>
    );
};

export default Card;
