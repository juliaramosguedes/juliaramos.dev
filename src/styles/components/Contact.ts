import styled from "styled-components";
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'
import { darken } from 'polished';

import theme from '../theme';
import bgStars from '../../assets/bg-stars-1.png';

export const Section = styled.section`
    padding: 84px 32px 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    width: 100%;
    position: relative;
    background: ${theme.colors.text} url(${bgStars}) no-repeat top 250px right 72px;
    background-size: 1024px;

    @media(min-width:768px) {
        padding: 112px 32px 36px;
        background: ${theme.colors.text} url(${bgStars}) no-repeat top left -750px;
    }

    @media(min-width:1024px) {
        background: ${theme.colors.text} url(${bgStars}) no-repeat top left -450px;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 104px;

    @media(min-width:768px) {
        margin-top: 48px;
    }
`

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 104px;
    color: ${darken(0.25, '#ffffff')};
    font-size: 18px;

    @media(min-width:768px) {
        margin-top: 96px;
    }
`

export const Text = styled.p`
    text-align: center;
    max-width: 230px;
    z-index: 1;

    @media(min-width:768px) {
        max-width: 350px;
    }
`
export const Email = styled.a`
    color: ${theme.colors.secondary};
    font-size: 32px;
    font-weight: bold;
    z-index: 1;

    p {
        margin-top: 8px;
    }
`

export const EmailIcon = styled(EmailOutline)`
    margin: 0 8px 8px 0;
    z-index: 1;
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`

export const FollowMe = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media(min-width:768px) {
        flex-direction: row;

        p {
            margin: 0 32px 0 0;
        }
    }
`

export const Planet = styled.img`
    align-self: flex-end;
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 50px;
`
