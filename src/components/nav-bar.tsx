import React, { useState } from 'react';
import Link from "next/link";

import { BurgerMenu, Menu, Nav, Wrap } from '../styles/components/NavBar';
import { Separator } from '../styles/components/Shared';

import Logo from '../assets/logo.svg';
import theme from '../styles/theme';

const NavBar: React.FC = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <Nav {...props}>
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
                    <Link href="/#about-me">
                        <a title="Ir para a seção Sobre mim">Sobre mim</a>
                    </Link>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <Link href="/CV">
                        <a title="Ir para a página Currículo">Currículo</a>
                    </Link>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <Link href="/#techs">
                        <a title="Ir para a seção Tecnologias">Tecnologias</a>
                    </Link>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <Link href="/#projects">
                        <a title="Ir para a seção Projetos">Projetos</a>
                    </Link>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <Link href="/#articles">
                        <a title="Ir para a seção Artigos">Artigos</a>
                    </Link>
                </li>
                <Separator color={theme.colors.primary}/>
                <li>
                    <Link href="/#contact">
                        <a title="Ir para a seção Contato">Contato</a>
                    </Link>
                </li>
            </Menu>
        </Nav>
    );
};

export default NavBar;
