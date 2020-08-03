import React, {useEffect, useState} from 'react';
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import PageDefault from '../../pageDefault';
import categoriasRepository from '../../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  
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
      {dadosIniciais.length === 0 && <div>Loading...</div>}
      
      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0) {
          return(
            <div key={categoria.id}>   
              <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={dadosIniciais[0].videos[0].description}
            />
            <Carousel ignoreFirstVideo category={dadosIniciais[0]}/>
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
  );
}
export default Home;
