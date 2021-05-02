import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { WebSite as WebSiteStyle } from '../styles/components/WebSite';
import theme from '../styles/theme';
import WebPage from '../assets/web-page.svg'

interface WebSiteProps {
    Icon?: StyledIcon;
    url: string;
    title: string;
}

const WebSite: React.FC<WebSiteProps> = ({ Icon, url, title, children }) => {
    return (
        <a href={url} title={title}>
            <WebSiteStyle>
                <WebPage/>
                {Icon && <Icon size="30px" color={theme.colors.text} />}
                <h3><strong>{children}</strong></h3>
            </WebSiteStyle>
        </a>
    );
};

export default WebSite;
