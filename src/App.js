import React from 'react';
import styled from 'styled-components';
import Menu from './componentes/menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain'
import Carousel from './componentes/Carousel'
import Footer from './componentes/Footer';

const AppWrapper = styled.div`
  background: var(--darkbckground);

`;

function App() {
  return (
    <AppWrapper>

      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Ser programador nao é algo simples. Akita faz um overview sobre o mundo da programação e desmistifica muitas falacias sobre o que é ser um programador nos dias atuais."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </AppWrapper>
  );
}

export default App;
