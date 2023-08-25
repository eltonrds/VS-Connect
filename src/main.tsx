import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import ListaDevs from "./pages/ListaDevs";
import Perfil from './pages/PerfilUsuario';
import VisualizarServico from "./pages/VisualizarServico";
import CadastroUsuario from './pages/CadastroUsusario';
import CadastroServico from './pages/CadastroServico/CadastroServico';
import Login from './pages/Login';
import Footer from "./components/Footer"
import Header from './components/Header';

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import secureLocalStorege from 'react-secure-storage';

function logado() {
  if (secureLocalStorege.getItem
    ("user")) {
    const objetoUsuario: any = secureLocalStorege.getItem("user");

    const nome:string = objetoUsuario.user.nome.trim().split("")[0];

    return { logado: true, nomeUsuario: nome }
  }
  else{
    return{logado: false, nomeUsuario: null }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header usuario={logado()} />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='lista/servicos' element={<ListaServicos />}/>
        <Route path='lista/devs' element={<ListaDevs />}/>
        <Route path='login' element={<Login />}/>
        <Route path='perfil/:idUsuario'element={<Perfil />}/>
        <Route path='/visualizar/servicos/:idServico' element={<VisualizarServico />}/>
        <Route path='cadastro/usuario' element={<CadastroUsuario />}/>
        <Route path='cadastro/servicos' element={<CadastroServico />}/>


      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)