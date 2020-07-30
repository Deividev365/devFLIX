import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './componentes/pages/home';
import Error from './componentes/error404/index';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './componentes/pages/cadastro/video';
import CadastroCategoria from './componentes/pages/cadastro/categoria';




ReactDOM.render(
  <BrowserRouter>
    <Switch>

        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>

        <Route component={Error}/>

    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
