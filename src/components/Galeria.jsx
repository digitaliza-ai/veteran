import React, { useState, useEffect } from 'react'
import './Galeria.css'

const Galeria = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
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
          'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Imagem+1',
          'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Imagem+2',
          'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Imagem+3',
        ])
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar imagens:', error)
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play do carrossel
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000) // Muda a imagem a cada 5 segundos

      return () => clearInterval(interval)
    }
  }, [images.length])

  return (
    <section id="galeria" className="galeria">
      <div className="galeria-container">
        <h2 className="section-title">Galeria</h2>
        
        {loading ? (
          <div className="loading">Carregando imagens...</div>
        ) : (
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <button 
                className="carousel-btn carousel-btn-prev" 
                onClick={prevImage}
                aria-label="Imagem anterior"
              >
                &#8249;
              </button>
              
              <div className="carousel-slide">
                <img 
                  src={images[currentIndex]} 
                  alt={`Projeto ${currentIndex + 1}`}
                  className="carousel-image"
                />
              </div>
              
              <button 
                className="carousel-btn carousel-btn-next" 
                onClick={nextImage}
                aria-label="Próxima imagem"
              >
                &#8250;
              </button>
            </div>
            
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Galeria

