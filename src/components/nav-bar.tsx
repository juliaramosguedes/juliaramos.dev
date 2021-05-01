import React, { RefObject, useCallback, useState } from 'react';

import { BurgerMenu, Menu, Nav, Wrap } from '../styles/components/NavBar';
import { Separator } from '../styles/components/Shared';

import Logo from '../assets/logo.svg';
import theme from '../styles/theme';

interface NavBarProps {
    scroller: Function;
    refs: {
        aboutMeRef: RefObject<HTMLElement>;
        articlesRef: RefObject<HTMLElement>;
        contactRef: RefObject<HTMLElement>;
        projectsRef: RefObject<HTMLElement>;
        techsRef: RefObject<HTMLElement>;
    };
}

const NavBar: React.FC<NavBarProps> = ({ refs: { aboutMeRef, articlesRef, contactRef, projectsRef, techsRef }, scroller }) => {
    const [checked, setChecked] = useState(false);

    const onClick = useCallback((ref) => {
        scroller(ref);
        setChecked(false);
    }, []);

    return (
        <Nav>
            <Wrap>
                <Logo/>
                <BurgerMenu title="Menu">
                    <input id="menu-hamburguer" type="checkbox" checked={checked}
                           onChange={() => setChecked(!checked)}/>
                    <label htmlFor="menu-hamburguer">
                        <div className="menu">
                            <span className="hamburguer"/>
                        </div>
                    </label>
                </BurgerMenu>
            </Wrap>
            <Menu checked={checked}>
                <a onClick={() => onClick(aboutMeRef)}>
                    <li>Sobre mim</li>
                </a>
                <Separator color={theme.colors.primary}/>
                <a onClick={() => onClick(techsRef)}>
                    <li>Tecnologias</li>
                </a>
                <Separator color={theme.colors.primary}/>
                <a onClick={() => onClick(projectsRef)}>
                    <li>Projetos</li>
                </a>
                <Separator color={theme.colors.primary}/>
                <a onClick={() => onClick(articlesRef)}>
                    <li>Artigos</li>
                </a>
                <Separator color={theme.colors.primary}/>
                <a onClick={() => onClick(contactRef)}>
                    <li>Contato</li>
                </a>
            </Menu>
        </Nav>
    );
};

export default NavBar;
