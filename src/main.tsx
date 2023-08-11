import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home";
import ListaServicos from './pages/ListaServicos';
import Footer from './components/Footer';
import Header from './components/Header';

//estilizacao
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <BrowserRouter>{/*Indica que aplicacao tera rotas*/}
      {/*HEADER*/}
      <Header/>

      <Routes>{/*indica a lista de rotas */}
        <Route path='/' element={<Home/>}/>  {/*indica o caminho do componente e o nome da rota ele */}
        <Route path='/' element={<ListaServicos/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>

  </React.StrictMode>,
)
