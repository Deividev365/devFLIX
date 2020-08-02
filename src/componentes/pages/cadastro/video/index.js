import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../pageDefault';
import useForm from '../../../../hooks/useForm';
import FormField from '../../../formField';
import Button from '../../../Button';
import videosRepository from '../../../../repositories/videos'
import categoriasRepository from '../../../../repositories/categorias'

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const {handleChange, values} = useForm({
      titulo: 'video teste',
      url: 'https://www.youtube.com/watch?v=ynTOESdngmc',
      categoria: 'Front End'
  });

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer)
    })
  }, []); 

  console.log(categorias)

    return(
        <PageDefault>
           <h1>Cadastre o Seu vídeo</h1>

           <form onSubmit={(event) => {
             event.preventDefault()
            // alert('Vídeo Cadastrado');


            const categoriaEscolhida = categorias.find((categoria) => {
              return categoria.titulo === values.categoria
            })

            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log('Cadastrou com Sucesso!!');
              history.push('/');
            })

           }}>


           <FormField
              label="Titulo do video"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
             
            />

            <FormField
              label="URL do video"
              name="url"
              value={values.url}
              onChange={handleChange}
            />

            <FormField
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

          <Button>
              Cadastrar
          </Button>

           </form>

           <Link to="/cadastro/categoria">
                Cadastrar Categoria
           </Link>
        </PageDefault>
    )
  }

export default CadastroVideo;  

