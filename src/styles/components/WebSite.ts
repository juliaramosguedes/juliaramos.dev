import styled from 'styled-components';

import theme from '../theme';

export const WebSite = styled.div`
    width: 253px;
    height: 227px;
    padding: 36px 24px;
    position: relative;

    h3 {
      z-index: 3;
        position: absolute;
        top: 96px;
        left: 16px;
        max-width: 210px;
    }

    svg:first-child {
        position: absolute;
        top: 0;
        right: 0;
    }

    &:hover {
        svg:first-child {
            path:nth-child(2) {
                fill: ${theme.colors.alert};
            }

            path:nth-child(4) {
                fill: ${theme.colors.alert};
            }

            path:nth-child(5) {
                fill: ${theme.colors.alert};
            }

            path:nth-child(7) {
                fill: ${theme.colors.alert};
            }

            path:nth-child(9) {
                fill: ${theme.colors.alert};
            }

            path:nth-child(11) {
                fill: ${theme.colors.alert};
            }
        }
    }

    svg:nth-child(2) {
        position: absolute;
        top: 50px;
        left: -12px;
        z-index: 2;
        background-color: white;
    }
`;
