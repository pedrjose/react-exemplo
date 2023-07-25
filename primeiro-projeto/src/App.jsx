import { useState } from "react";
import reactLogo from "./assets/react.svg";

// BrowserRouter cria rotas no navegador
// Routes armazena essas rotas
// Route é onde nós configuramos a rota em si
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";

// Pegando os componentes da pasta components e importando
import { HelloWorld } from "./components/HelloWorld";
import { OlaMundo } from "./components/OlaMundo";
import { HolaMundo } from "./components/HolaMundo";
import "./App.css";

// - path é a rota que será criada
// - element é o componente React que aquela rota retorna
// <Route path="hello-world" element={<HelloWorld />} />
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="hello-world" element={<HelloWorld />} />
          <Route path="ola-mundo" element={<OlaMundo />} />
          <Route path="hola-mundo" element={<HolaMundo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
