import React from 'react';
import Logo from '../../assets/img/logo.png'
import {LogoImage, MenuWrapper, ButtonLink} from './style.js'
//import ButtonLink from './componentes/Bottom';
//import Button from '../menu/Button';

 const Menu = () => {
    return(
        <MenuWrapper className="Menu">
            <a href="/">
               <LogoImage className="logo" src={Logo} alt="devflix-logo"/>
            </a>

            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    )
} 

export default Menu;
