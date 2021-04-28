import styled from "styled-components";

import theme from '../theme';
import bgStars from '../../assets/bg-stars-1.png';

export const Section = styled.section`
    padding: 120px 24px 0;
    width: 100%;
    position: relative;

    background: url(${bgStars}) no-repeat top center;
    background-size: 517px;

    @media(min-width:375px) {
        padding: 120px 56px 0;
    }

    @media(min-width:768px) {
        padding: 220px 20% 0;
        background-size: 90%;
    }

    @media(min-width:1024px) {
        padding: 220px 34% 0;
        background: url(${bgStars}) no-repeat top -200px center;
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
