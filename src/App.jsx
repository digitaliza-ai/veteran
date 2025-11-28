import React from 'react'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Galeria from './components/Galeria'
import Contato from './components/Contato'
import Endereco from './components/Endereco'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sobre />
        <Galeria />
        <Contato />
        <Endereco />
      </main>
      <Footer />
    </div>
  )
}

export default App





