import React from 'react';
import { FooterBase, LogoImage, FooterLink } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoImage src={Logo} alt="Logo" />
      </a>
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
