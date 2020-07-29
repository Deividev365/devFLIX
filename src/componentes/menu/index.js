import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import {LogoImage, MenuWrapper, ButtonLink} from './style.js'
//import ButtonLink from './componentes/Bottom';
//import Button from '../menu/Button';

 const Menu = () => {
    return(
        <MenuWrapper className="Menu">
            <Link to="/">
               <LogoImage className="logo" src={Logo} alt="devflix-logo"/>
            </Link>

            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    )
} 

export default Menu;
