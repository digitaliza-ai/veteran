import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VETERAN</h3>
            <p>Segurança e Automação</p>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>(44) 3045-7709</p>
            <p>(44) 9 9180-9195</p>
            <p>eduardoveteran@gmail.com</p>
          </div>
          <div className="footer-section">
            <h4>Endereço</h4>
            <p>Rua Takeshi Mitsuyasu, 1058</p>
            <p>Jardim Ipê</p>
            <p>Paranavaí - PR</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} VETERAN Segurança e Automação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer





