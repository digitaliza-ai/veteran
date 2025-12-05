import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoUrl, setLogoUrl] = useState('')

  // Função para buscar logo do Google Drive
  const fetchDriveLogo = async (folderId) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink)`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error("Erro na API do Google Drive:", data.error);
        return { error: data.error };
      }

      return { files: data.files || [] };
    } catch (error) {
      console.error("Erro ao buscar logo:", error);
      return { error: error.message };
    }
  };

  const getDirectImageUrl = (fileId) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=s200?authuser=0`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const logoFolderId = import.meta.env.VITE_LOGO_FOLDER_ID;
        const result = await fetchDriveLogo(logoFolderId);
        
        if (result.error || !result.files || result.files.length === 0) {
          console.error('Erro ao carregar logo ou pasta vazia');
        } else {
          // Pega o primeiro arquivo da pasta
          const logoFileId = result.files[0].id;
          setLogoUrl(getDirectImageUrl(logoFileId));
        }
      } catch (error) {
        console.error('Erro ao carregar logo:', error);
      }
    };

    loadLogo();
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
          {logoUrl ? (
            <img src={logoUrl} alt="VETERAN Logo" className="logo-image" />
          ) : (
            <>
              <h1>VETERAN</h1>
              <span>Segurança e Automação</span>
            </>
          )}
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





