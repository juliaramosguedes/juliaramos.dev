import styled from "styled-components";

import theme from '../theme';
import bgStars from '../../assets/bg-stars-1.png';

export const Section = styled.section`
    padding: 120px 56px 0;
    width: 100%;
    position: relative;
    min-height: 100vh;

    background: url(${bgStars}) no-repeat top center;
    background-size: 517px;

    @media(min-width:768px) {
        padding: 30vh 28.75% 0;
        background: url(${bgStars}) no-repeat top center;
        background-size: 90%;
    }

    @media(min-width:1024px) {
        padding: 30vh 28.75% 0;
        background: url(${bgStars}) no-repeat top -100% center;
        background-size: 90%;
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
    width: calc(100% - 56px);
    height: 69px;
    margin-top: 4px;
    border: 5px solid ${theme.colors.text};
    background-color: ${theme.colors.text};
    z-index: 1;
    position: absolute;

    @media(min-width: 768px) {
        width: calc(100% - 28.75%);
    }
    `

export const ButtonArrow = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 130px auto;
    border: 0;
    background-color: transparent;
    z-index: 5;
`
