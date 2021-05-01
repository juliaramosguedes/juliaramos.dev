import styled from "styled-components";
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'
import { darken } from 'polished';

import theme from '../theme';
import bgStars from '../../assets/bg-stars-3.png';
import twinkling from '../../assets/twinkling.png';
import clouds from '../../assets/clouds.png';

export const Section = styled.section`
    padding: 84px 32px 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    width: 100%;
    position: relative;

    @media(min-width:768px) {
        padding: 144px 32px 36px;
    }
`

export const Stars = styled.div`
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: ${darken(0.1, theme.colors.text)} url(${bgStars}) repeat top center;
`

export const Twinkling = styled.div`
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: transparent url(${twinkling}) repeat top center;
    animation: move-twink-back 200s linear infinite;

    @keyframes move-twink-back {
        from {
            background-position: 0 0;
        }
        to {
            background-position: -10000px 5000px;
        }
    }
`

export const Clouds = styled.div`
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: transparent url(${clouds}) repeat top center;
    animation: move-clouds-back 200s linear infinite;

    @keyframes move-clouds-back {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 10000px 0;
        }
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 104px;
    z-index: 3;

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
    z-index: 3;

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
    position: relative;

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
    position: relative;
    z-index: 3;

    @media(min-width:768px) {
        flex-direction: row;

        p {
            margin: 0 32px 0 0;
        }
    }
`

export const Planet = styled.img`
    align-self: flex-end;
    z-index: 3;
    position: absolute;
    bottom: 0;
    right: 50px;
`
