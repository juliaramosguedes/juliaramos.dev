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

const NavBar: React.FC<NavBarProps> = ({
    refs: { aboutMeRef, articlesRef, contactRef, projectsRef, techsRef },
    scroller,
}) => {
    const [checked, setChecked] = useState(false);

    const onClick = useCallback((ref) => {
        scroller(ref);
        setChecked(false);
        return false;
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
                <li>
                    <button title="Ir para a seção Sobre mim" onClick={() => onClick(aboutMeRef)}>
                        Sobre mim
                    </button>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <button title="Ir para a seção Tecnologias" onClick={() => onClick(techsRef)}>
                        Tecnologias
                    </button>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <button title="Ir para a seção Projetos" onClick={() => onClick(projectsRef)}>
                        Projetos
                    </button>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <button title="Ir para a seção Artigos" onClick={() => onClick(articlesRef)}>
                        Artigos
                    </button>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <button title="Ir para a seção Contato" onClick={() => onClick(contactRef)}>
                        Contato
                    </button>
                </li>
            </Menu>
        </Nav>
    );
};

export default NavBar;
