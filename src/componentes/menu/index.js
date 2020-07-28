import React from 'react';
import Logo from '../../assets/img/logo.png'
import './menu.css';
//import ButtonLink from './componentes/Bottom';
import Button from '../menu/Button';

 const Menu = () => {
    return(
        <nav className="Menu">
            <a href="/">
               <img className="logo" src={Logo} alt="devflix-logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo aquii
            </Button>
        </nav>
    )
} 

export default Menu;
