import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <h3>Seguinos!</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/globalfreaksgb" target="_blank" rel="noopener noreferrer">
                <img src="/assets/Icons/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC9SiiZMXDl7dzvKFrgh_BEQ" target="_blank" rel="noopener noreferrer">
                <img src="/assets/Icons/youtube.png" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.es/globalfreaks/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/Icons/pinterest.png" alt="Pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Oficinas</h3>
          <p>+34 621 29 49 75 (SOLO/ONLY WHATSAPP)</p>
          <p><a href="mailto:info@cosmic.toy.store.com">info@toyland.store.com</a></p>
          <p>Global Freaks</p>
          <p>C/ Gran Bretaña 35-36, Nave 1-A</p>
          <p>07700 Igualada, Barcelona, España</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;