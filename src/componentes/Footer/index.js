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
        <FooterLink target="_blank" href="https://www.youtube.com/channel/UCt1DS9yWqPQoF-WLjZqbNOw/featured/">
          Aprenda  história em um único lugar 
        </FooterLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
