import React from "react";

import '../styles/FooterStyle.css'; // Ruta de donde coge estilos el componente Footer. 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socialmedia-nav">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__socialmedia-link"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__socialmedia-link"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__socialmedia-link"
        >
          Twitter
        </a>
      </div>
      <div className="footer__legal-info">
        <p className="footer__legal-link">
          Política de Cookies
        </p>
        <p className="footer__legal-link">
          Términos y Condiciones
        </p>
        <p className="footer__legal-link">
          Aviso Legal
        </p>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} BOOKSPACE. Todos los derechos reservados. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
