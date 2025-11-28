import React, { useState, useEffect } from 'react'
import './Sobre.css'

const Sobre = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const fetchImages = async () => {
      try {
        // Substitua 'YOUR_FOLDER_ID' pelo ID da pasta do Google Drive
        // const folderId = 'YOUR_FOLDER_ID'
        // const apiKey = 'YOUR_API_KEY'
        // const response = await fetch(
        //   `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`
        // )
        // const data = await response.json()
        
        // Por enquanto, usando imagens placeholder
        // Você pode substituir isso pela integração real do Google Drive
        setImages([
          'https://via.placeholder.com/400x300/2d2d2d/d4af37?text=Imagem+1',
          'https://via.placeholder.com/400x300/2d2d2d/d4af37?text=Imagem+2',
          'https://via.placeholder.com/400x300/2d2d2d/d4af37?text=Imagem+3',
        ])
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar imagens:', error)
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <div className="sobre-content">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="sobre-text">
            <p>
              A <strong>VETERAN SEGURANÇA E AUTOMAÇÃO</strong> é uma empresa 
              especializada em soluções de segurança e automação residencial e comercial. 
              Com anos de experiência no mercado, oferecemos serviços de alta qualidade 
              para garantir a proteção e o conforto dos nossos clientes.
            </p>
            <p>
              Nossa equipe é composta por profissionais altamente qualificados e 
              comprometidos em fornecer as melhores soluções em segurança eletrônica, 
              sistemas de alarme, câmeras de monitoramento e automação residencial.
            </p>
            <p>
              Trabalhamos com tecnologia de ponta e produtos das melhores marcas do mercado, 
              sempre priorizando a satisfação e a segurança dos nossos clientes.
            </p>
          </div>
        </div>

        <div className="sobre-images">
          <h3 className="images-title">Nossos Projetos</h3>
          {loading ? (
            <div className="loading">Carregando imagens...</div>
          ) : (
            <div className="images-grid">
              {images.map((image, index) => (
                <div key={index} className="image-card">
                  <img src={image} alt={`Projeto ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Sobre