import React, { RefObject, useCallback, useState } from 'react';

import { BurgerMenu, Menu, Nav } from '../styles/components/NavBar';
import { Separator } from '../styles/components/Shared';

import Logo from '../assets/logo.svg';
import theme from '../styles/theme';

interface NavBarProps {
    scroller: Function;
    refs: {
        aboutMeRef: RefObject<HTMLElement>;
        contactRef: RefObject<HTMLElement>;
    };
}

const NavBar: React.FC<NavBarProps> = ({ refs: { aboutMeRef, contactRef }, scroller }) => {
    const [checked, setChecked] = useState(false);

    const onClick = useCallback((ref) => {
        scroller(ref);
        setChecked(false);
    }, [])

    return (
        <Nav>
            <Logo/>
            <BurgerMenu title="Menu">
                <input id="menu-hamburguer" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <label htmlFor="menu-hamburguer">
                    <div className="menu">
                        <span className="hamburguer"/>
                    </div>
                </label>
                <Menu>
                    <a onClick={() => onClick(aboutMeRef)}><li>Sobre mim</li></a>
                    <Separator color={theme.colors.primary}/>
                    <a onClick={() => onClick(contactRef)}><li>Contato</li></a>
                </Menu>
            </BurgerMenu>
        </Nav>
    );
};

export default NavBar;
