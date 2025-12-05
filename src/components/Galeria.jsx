import React, { useState, useEffect } from 'react'
import './Galeria.css'

const Galeria = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchDriveImages = async (folderId) => {
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
      console.error("Erro ao buscar imagens:", error);
      return { error: error.message };
    }
  };

  const getDirectImageUrl = (fileId) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=s500?authuser=0`;
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderId = import.meta.env.VITE_GALERIA_FOLDER_ID;
        const result = await fetchDriveImages(folderId);
        
        if (result.error) {
          console.error('Erro ao carregar imagens do Google Drive:', result.error);
          setImages([
            'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Erro+ao+carregar'
          ]);
        } else {
          const imageUrls = result.files.map(file => getDirectImageUrl(file.id));
          setImages(imageUrls);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
        setImages([
          'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Erro+ao+carregar'
        ]);
        setLoading(false);
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

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)

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

