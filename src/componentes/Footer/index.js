import React from 'react';
import {Link} from 'react-router-dom';
import { FooterBase, LogoImage, FooterLink } from './styles';
import Logo from '../../assets/img/logo.png'
const footerLink = "https://www.youtube.com/channel/UCXbGJ6H-HBeTdTYl4FIixIA";
function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <LogoImage src={Logo} alt="Logo" />
      </Link>
      <p>
        {' '}
        <FooterLink target="_blank" href={footerLink}>
          Aprenda  história em um só lugar 
        </FooterLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
