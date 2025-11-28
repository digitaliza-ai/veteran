import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>VETERAN</h1>
          <span>Segurança e Automação</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('sobre')}>Sobre</button>
          <button onClick={() => scrollToSection('galeria')}>Galeria</button>
          <button onClick={() => scrollToSection('contato')}>Contato</button>
          <button onClick={() => scrollToSection('endereco')}>Endereço</button>
        </nav>
      </div>
    </header>
  )
}

export default Header





