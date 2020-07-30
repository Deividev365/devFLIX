import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../pageDefault';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState('[Filmes]');

  const valoresIniciais = {
    name: 'this is a name',
    description: 'this is a description',  
    color: '#000',
  }

  const [values, setValues] = useState(valoresIniciais);
  
  

    return(
        <PageDefault>
           <h1>Cadastro de Categoria: {values.name}</h1>

           <form onSubmit={function handleSubmit(eventsInfo){
             eventsInfo.preventDefault();
             setCategorias([
              ...categorias,
                 values
             ]);

           }}>

              <div>
                  <label>
                    Nome da categoria
                    <input 
                      type="text"
                      value={values.name}
                      onChange={function onChange(eventsInfo){
                        //setNomeDaCategoria(eventsInfo.target.value);
                      }}
                      />
                </label>



            <div>
                <label>
                    categoria
                    <textarea 
                      type="text"
                      value={values.description}
                      onChange={function onChange(eventsInfo){
                        //setNomeDaCategoria(eventsInfo.target.value);
                      }}
                      />
                </label>
                </div>

                <div>
                <label>
                    Cor
                    <input 
                      type="color"
                      value={values.color}
                      onChange={function onChange(eventsInfo){
                        //setNomeDaCategoria(eventsInfo.target.value);
                      }}
                      />
                </label>
              </div>
            </div>
         




              <button>Cadastrar</button>
              
           </form>

           <ul>
             {categorias.map((categoria, indice) => {
               return(
                 <li key={`${categoria} ${indice} `}>
                    {categoria}
                 </li>
               )
             })}
           </ul>

           <Link to="/">
                voltar
           </Link>
        </PageDefault>
    )
  }

export default CadastroCategoria;  

