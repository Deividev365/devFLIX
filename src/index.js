import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './componentes/pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './componentes/pages/cadastro/video';


const Error = () => {
  return(
    <div>Error 404</div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <Switch>

        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route component={Error}/>

    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
