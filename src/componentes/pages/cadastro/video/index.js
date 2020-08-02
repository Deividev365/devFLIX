import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../pageDefault';
import useForm from '../../../../hooks/useForm';
import FormField from '../../../formField';
import Button from '../../../Button';
import videosRepository from '../../../../repositories/videos'

const CadastroVideo = () => {
  const history = useHistory();
  const {handleChange, values} = useForm({
      titulo: 'video teste',
      url: 'https://www.youtube.com/watch?v=ynTOESdngmc',
      categoria: 'Front End'
  });

    return(
        <PageDefault>
           <h1>Cadastre o Seu vídeo</h1>

           <form onSubmit={(event) => {
             event.preventDefault()
            // alert('Vídeo Cadastrado');
            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: 1,
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
              name="url"
              value={values.categoria}
              onChange={handleChange}
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

