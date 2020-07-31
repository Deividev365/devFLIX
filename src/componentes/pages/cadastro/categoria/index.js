import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../pageDefault';
import FormField from '../../../formField';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState( [] );

  const valoresIniciais = {
    name: '',
    description: '',  
    color: '',
  }

  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })

  }

  function handleChange(eventsInfo){

    setValue(
      eventsInfo.target.getAttribute('name'),
      eventsInfo.target.value
    
    );                
  }

 

    return(
        <PageDefault>
           <h1>Cadastro de Categoria: {values.name}</h1>

           <form onSubmit={function handleSubmit(eventsInfo){
             eventsInfo.preventDefault();
             setCategorias([
              ...categorias,
                 values
             ]);

             setValues(valoresIniciais);


           }}>

           <FormField
           label="Nome da Categoria"
            type="text"
            name="name"
            value={values.nome}
            onChange={handleChange}
            typeTextArea="<textarea>"
           />

            <div>
                <label>
                    Descrição
                    <textarea 
                      type="text"
                      value={values.description}
                      name="description"
                      onChange={handleChange}
                      />
                </label>
                </div>

                <div>
                <label>
                    Cor
                    <input 
                      type="color"
                      value={values.color}
                      name="color"
                      onChange={handleChange}
                      />
                </label>
              </div>
         




              <button>Cadastrar</button>
              
           </form>

           <ul>
             {categorias.map((categoria, indice) => {
               return(
                 <li key={`${categoria} ${indice} `}>
                    {categoria.name}
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

