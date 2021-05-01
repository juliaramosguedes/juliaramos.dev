import React from 'react';

import { Card as CardStyle } from '../styles/components/Card';
import { CheckCircle } from '@styled-icons/heroicons-outline/CheckCircle';
import theme from '../styles/theme';

const Card: React.FC = ({ alignCenter, children }) => {
    return (
        <CardStyle alignCenter={alignCenter}>
            <CheckCircle size="30px" color={theme.colors.primary} />
            <h3>{children}</h3>
        </CardStyle>
    );
};

export default Card;
