import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import estilos from'./App.module.css'
import { Cabecalho } from './Componentes/Cabecalho';
import { BarraNavegacao } from './Componentes/BarradeNavegacao'
import { Conteudo } from './Componentes/Conteudo'



function App() {
  return (
    <>
    <Cabecalho/>
    <BarraNavegacao/>
    <Conteudo/>
   </>
  )
}

export default App
