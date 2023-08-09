import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home";
import ListaServicos from "./pages/ListaServicos";

//estilizacao
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListaServicos />
  </React.StrictMode>,
)
