import styled from "styled-components";

import theme from '../theme';
import bgStars from '../../assets/bg-stars-1.png';

export const Section = styled.header`
    padding: 144px 24px 0;
    width: 100%;
    position: relative;
    background: url(${bgStars}) no-repeat top center;
    background-size: 517px;

    @media(min-width:375px) {
        padding: 164px 56px 0;
    }

    @media(min-width:768px) {
        padding: 220px 20% 0;
        background-size: 90%;
    }

    @media(min-width:1024px) {
        padding: 220px 34% 0;
        background: url(${bgStars}) no-repeat top -200px center;
    }

    @media(min-width:1920px) {
        padding: 220px 38% 0;
    }
`

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    #tsparticles {
        height: 300px;

        @media(min-width: 768px) {
            height: 400px;
        }
    }
`

export const Title = styled.h1`
    text-transform: none;
    z-index: 3;
    position: absolute;
    top: 34px;
    left: 14px;
    line-height: 80px;
`

export const TitleBorderOutline = styled.div`
    width: 200px;
    height: 120px;
    border: 5px solid ${theme.colors.text};
    background-color: white;
    z-index: 3;
    position: relative;
    padding: 14px;
`

export const TitleBorder = styled.div`
    width: calc(100% - 24px);
    height: 69px;
    margin-top: 4px;
    border: 5px solid ${theme.colors.text};
    background-color: ${theme.colors.text};
    z-index: 1;
    position: absolute;


    @media(min-width:375px) {
        width: calc(100% - 56px);
    }

    @media(min-width: 768px) {
        width: calc(100% - 20%);
    }

    @media(min-width: 1024px) {
        width: calc(100% - 34%);
    }

    @media(min-width:1920px) {
        width: calc(100% - 38%);
    }
    `

export const ButtonArrow = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 136px auto 84px;
    border: 0;
    background-color: transparent;
    z-index: 5;
    animation: float 2s infinite ease;

    @keyframes float {
        0% {
            transform: translateY(0);
            -webkit-transform: translateY(0);
        }

        50% {
            transform: translateY(1.5rem);
            -webkit-transform: translateY(1.5rem);
        }

        100% {
            transform: translateY(0);
            -webkit-transform: translateY(0);
        }
    }
`

export const WrapStar = styled.div`
    z-index: 2;
    position: absolute;
    top: -20px;
    right: -5px;
    overflow: hidden;
    width: 35px;
    height: 57px;

    svg {
        width: 47px;
        height: 57px;
    }

    @media(min-width:340px) {
        left: 260px;
        width: 47px;
        height: 57px;
    }

    @media(min-width:768px) {
        top: -45px;
        left: 270px;
        width: 63px;
        height: 75px;

        svg {
            width: 63px;
            height: 75px;
        }
    }
`
