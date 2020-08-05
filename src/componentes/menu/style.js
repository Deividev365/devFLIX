import styled from 'styled-components';
import Button from '../Button';


export const LogoImage = styled.img`
  max-width: 200px;


  @media(max-width: 800px) {
    max-width: 160px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 90px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;


  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px){
    height: 65px;
    justify-content: center;

  }

  `;

  export const ButtonLink = styled(Button)`
   
    visibility: hidden; /*manuntenção para adicionar vídeos propriety: hidden*/
    color: var(--white);
    border: 1.5px solid linear-gradient(to right, red , yellow);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;

    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;


    &:hover,
    &:focus {
      opacity: .5
    }

    @media(max-width: 800px) {
      background-color: var(--newVideo);
      position: fixed;
      border-radius: 0px;
      left: 0;
      bottom: 0;
      color: var(--black);
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 9%;
      width: 100%;
      outline: none;

    }

  `;