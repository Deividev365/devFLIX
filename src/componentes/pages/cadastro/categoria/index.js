import React from 'react';
import PageDefault from '../../../pageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
    return(
        <PageDefault>
           <h1>Cadastro de Categoria</h1>

           <form>

              <label>
                Nome da categoria
                <input 
                  type="text"/>
              </label>

              <button>Cadastrar</button>
              
           </form>

           <Link to="/">
                voltar
           </Link>
        </PageDefault>
    )
  }

export default CadastroCategoria;  

