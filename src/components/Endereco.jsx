import React from 'react'
import './Endereco.css'

const Endereco = () => {
  return (
    <section id="endereco" className="endereco">
      <div className="endereco-container">
        <h2 className="section-title">Nossa Localização</h2>
        <div className="endereco-content">
          <div className="endereco-info">
          <div className="address-details">
              <p><strong>Endereço: R. Dr. Viêira Lins, 181 - Centro, Paranavaí - PR, 87701-120</strong></p>
            </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.223053605518!2d-52.462514899999995!3d-23.0889292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9492977003f17c4f%3A0xdf2f851ef1e7b058!2zVmV0ZXJhbiBzZWd1cmFuw6dhIGUgYXV0b21hw6fDo28!5e0!3m2!1spt-BR!2sbr!4v1765300532485!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VETERAN Segurança e Automação"
            ></iframe>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Endereco

