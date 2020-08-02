import React, {useEffect, useState} from 'react';
//import styled from 'styled-components';
//import Menu from '../../menu'
//import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import PageDefault from '../../pageDefault';
//import Footer from '../../Footer';
import categoriasRepository from '../../../repositories/categorias';

//const AppWrapper = styled.div`
  //background: var(--darkbckground);

//`;

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);
  
     // http://localhost:8080/categorias?_embed=videos
    useEffect(() => {
      categoriasRepository.getAllWithVideos()
      .then((categoriasComVideo) => {
        console.log(categoriasComVideo);
        setDadosIniciais(categoriasComVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });

    },[]);

  return (
    <PageDefault paddingAll={0}>
      
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      
      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0) {
          return(
            <div key={categoria.id}>   
              <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={"Ser programador nao é algo simples. Akita faz um overview sobre o mundo da programação e desmistifica muitas falacias sobre o que é ser um programador nos dias atuais."}
            />
            <Carousel
              ignoreFirstVideo
              category={dadosIniciais[0]}
            />
            </div>
          );
        }


        return(
          <Carousel
          key={categoria.id}
          category={categoria}
          />
         );
      })}
    </PageDefault>
  )
}
export default Home;
