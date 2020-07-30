import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 4px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 5px;
  color: var(--white);
  text-align: center;
  text-decoration: none;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const LogoImage = styled.img`
  width: 100px;
`;

export const FooterLink = styled.a`

  text-decoration: none;
  font-size: 15px;
  transition: 0.4s;
  &:hover,
  &:focus{
    color: var(--aluraColor);
  }

`;
