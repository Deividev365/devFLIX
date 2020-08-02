import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../pageDefault';
import FormField from '../../../formField';
import Button from '../../../Button';
import useForm from '../../../../hooks/useForm';



const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    name: '',
    description: '',
    color: '',
  };

    const {handleChange, values, clearForm} = useForm(valoresIniciais);


  
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devflixbr.herokuapp.com/categorias';
    fetch(URL)
      .then(async (serverRes) => {
        const answear = await serverRes.json();
        setCategorias([
          ...answear,
        ]);
      });
    /*
    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          name: 'starter',
          description: 'Playlist do meu canal para iniciantes na programação',
          color: 'gray',
        },
        {
          id: 2,
          name: 'Front-End',
          description: 'Aprenda sobre front-end',
          color: 'green',
        },
      ]);
    }, 4 * 1000);
    */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(eventsInfo) {
        eventsInfo.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        voltar
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
