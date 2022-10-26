import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
      <div className="footer-icons">
        <i className="fa-brands fa-facebook footer-icon"></i>
        <i className="fa-brands fa-instagram footer-icon"></i>
        <i className="fa-brands fa-twitter footer-icon"></i>
        <i className="fa-brands fa-youtube footer-icon"></i>
      </div>
      <section className="footer-links-container">
      <div className="footer-links">
        <a href="/" className="footer-link">
          Audiodescription
        </a>
        <a href="/" className="footer-link">
          Relations Investisseurs
        </a>
        <a href="/" className="footer-link">
          Informations légales
        </a>
      </div>
      <div className="footer-links">
        <a href="/" className="footer-link">
          Centre d'aide
        </a>
        <a href="/" className="footer-link">
          Recrutement
        </a>
        <a href="/" className="footer-link">
          Préférences de cookies
        </a>
      </div>
      <div className="footer-links">
        <a href="/" className="footer-link">
          Cartes cadeaux
        </a>
        <a href="/" className="footer-link">
          Conditions d'utilisation
        </a>
        <a href="/" className="footer-link">
          Mentions légales
        </a>
      </div>
      <div className="footer-links">
        <a href="/" className="footer-link">
          Presse
        </a>
        <a href="/" className="footer-link">
          Confidentialité
        </a>
        <a href="/" className="footer-link">
          Nous contacter
        </a>
      </div>
      </section>
      <div className="code-service">Code de service</div>
      <div className="references">1997-2022 Netflix, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
