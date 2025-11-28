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
              <p><strong>Endereço: Rua Takeshi Mitsuyasu, 1058 Jardim Ipê 87706-290 - Paranavaí - PR</strong></p>
            </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.3946370147905!2d-52.44041782390515!3d-23.08555294428588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949295db1d48abe5%3A0x7e5aa2c571260023!2sR.%20Takeshi%20Mitsuyasu%2C%201058%20-%20Jardim%20Ipe%2C%20Paranava%C3%AD%20-%20PR%2C%2087706-290!5e0!3m2!1spt-BR!2sbr!4v1764287129969!5m2!1spt-BR!2sbr"
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

