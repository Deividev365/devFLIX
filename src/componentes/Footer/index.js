import React from 'react';
import {Link} from 'react-router-dom';
import { FooterBase, LogoImage, FooterLink } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <LogoImage src={Logo} alt="Logo" />
      </Link>
      <p>
        {' '}
        <FooterLink href="https://www.alura.com.br/">
          Feito durante a Imersão React da Alura | 2020
        </FooterLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
