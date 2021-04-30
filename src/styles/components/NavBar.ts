import styled from 'styled-components';

import theme from '../theme';

interface MenuProps {
    checked: boolean
}

export const Nav = styled.nav`
    position: fixed;
    z-index: 10;
`;

export const Wrap = styled.div`
    position: fixed;
    top: 0;
    background-color: ${theme.colors.primary};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 10;

    svg {
        width: 48px;
        height: 48px;
        margin-left: 24px;
    }
`;

export const BurgerMenu = styled.div`
    height: 70px;
    width: 70px;
    z-index: 5;
    display: flex;
    align-items: center;
    position: relative;
    -webkit-user-select: none;
    user-select: none;

    .menu {
        border-radius: 20px;
        width: 60px;
        height: 60px;
        z-index: 5;
        cursor: pointer;
        position: relative;
    }

    .hamburguer {
        position: relative;
        display: block;
        background: ${theme.colors.secondary};
        border-radius: 5px;
        width: 30px;
        height: 2px;
        top: 29px;
        left: 15px;
        transition: 0.5s ease-in-out;
        z-index: 5;
    }

    .hamburguer:before,
    .hamburguer:after {
        background: ${theme.colors.secondary};
        border-radius: 5px;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.5s ease-in-out;
    }

    .hamburguer:before {
        top: -10px;
    }

    .hamburguer:after {
        bottom: -10px;
    }

    input {
        display: none;
    }

    input:checked ~ label .hamburguer {
        transform: rotate(45deg);
    }

    input:checked ~ label .hamburguer:before {
        transform: rotate(90deg);
        top: 0;
    }

    input:checked ~ label .hamburguer:after {
        transform: rotate(90deg);
        bottom: 0;
    }
`;

export const Menu = styled.ul`
    position: fixed;
    top: 100px;
    right: 0;
    width: 280px;
    margin: -100px 0 0;
    padding: 72px 36px 0;
    background: white;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    z-index: 4;

    transform-origin: 0% 0%;
    transform: translate(0, -100%);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

    li {
        padding: 24px 0;
        font-size: 21px;
        z-index: 4;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.primary};
        transition: color 0.3s ease;
        z-index: 4;
    }

    a:hover {
        color: ${theme.colors.secondary};
    }

    ${({ checked }: MenuProps) => checked && 'transform: none'};
`;
