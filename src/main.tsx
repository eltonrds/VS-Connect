import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home";
import ListaServico from "./pages/ListaServicos";
import Footer from './components/Footer';
import Header from './components/Header';

//estilizacao
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Footer/>
    {/* <ListaServico /> */}
  </React.StrictMode>,
)
