import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import Pagina404 from './pages/404'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
