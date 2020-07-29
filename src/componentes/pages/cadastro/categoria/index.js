import React from 'react';
import PageDefault from '../../../pageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
    return(
        <PageDefault>
           <h1>Cadastro de Categoria</h1>

           <Link to="/">
                voltar
           </Link>
        </PageDefault>
    )
  }

export default CadastroCategoria;  

