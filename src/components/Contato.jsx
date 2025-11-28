import React from 'react'
import { Phone, Envelope, MapPin, Globe } from 'phosphor-react'
import './Contato.css'

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <h2 className="section-title">Contato</h2>
        <div className="contato-content">
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <Phone size={24} weight="fill" />
              </div>
              <h3>Telefones</h3>
            </div>
            <div className="info-details">
              <a href="https://wa.me/554430457709" target="_blank" rel="noopener noreferrer">(44) 3045-7709</a>
              <a href="https://wa.me/5544991809195" target="_blank" rel="noopener noreferrer">(44) 9 9180-9195</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <Envelope size={24} weight="fill" />
              </div>
              <h3>E-mail</h3>
            </div>
            <div className="info-details">
              <a href="mailto:eduardoveteran@gmail.com">eduardoveteran@gmail.com</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <MapPin size={24} weight="fill" />
              </div>
              <h3>Endereço</h3>
            </div>
            <div className="info-details">
              <p>Rua Takeshi Mitsuyasu, 1058</p>
              <p>Jardim Ipê</p>
              <p>87706-290 - Paranavaí - PR</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <Globe size={24} weight="fill" />
              </div>
              <h3>Redes Sociais</h3>
            </div>
            <div className="info-details">
              <a href="https://www.facebook.com/VeteranSeguranca" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/veteranseguranca/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato

