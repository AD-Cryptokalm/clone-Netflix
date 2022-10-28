import { useState } from "react";
import "../styles/Nav.scss";
import NavSlider from "./NavSlider";

const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toogleMenuSlider, setToogleMenuSlider] = useState(false);

  const scrollNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };
  useState(() => {
    document.addEventListener("scroll", scrollNav);
  });
  const handleClick = () => {
    toogleMenuSlider ? setToogleMenuSlider(false) : setToogleMenuSlider(true);
  };

  return (
    <>
      <div className={`nav ${navBlack && "nav-black"}`}>
        <button className="nav-burger" onClick={handleClick}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <img
          src="./images/logo.png"
          alt="logo entreprise"
          className="nav-logo"
        />
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Accueil
          </a>
          <a href="/" className="nav-link">
            Series
          </a>
          <a href="/" className="nav-link">
            Films
          </a>
        </nav>
        <form action="" className="toogleInputShearch">
            <input type="text"  placeholder="Rechercher" />
          </form>
        <div className="nav-actions">
          <a href="/" className="nav-action">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="/" className="nav-action">
            DIRECT
          </a>
          <a href="/" className="nav-action">
            <i className="fa-solid fa-bell"></i>
          </a>
          <div className="nav-menu">
            <img src="./images/avatar.png" alt="" />
            <i className="Icon fa-solid fa-caret-down"></i>
            <div className="nav-menu-container">
              <div id="passerrelle-hover">
              </div>
              <ul className="nav-menu-vertical toogleMenuVertical">
              <i className="toogleMenuVertical-icon fa-solid fa-caret-up"></i>
              
                <li className="nav-menu-vertical-line">
                  <img src="./images/profil2.png" alt="" />
                  <span>Méline</span>
                </li>
                <li className="nav-menu-vertical-line">
                  <img src="./images/profil3.jpg" alt="" />
                  <span>Mattis</span>
                </li>
                <li className="nav-menu-vertical-line">
                  <img src="./images/profil4.png" alt="" />
                  <span>Maman</span>
                </li>
                <li className="nav-menu-vertical-line">
                  <img src="./images/avatar.png" alt="" />
                  <span>Niko</span>
                </li>
                <li className="nav-menu-vertical-line">
                  <i className="fa-solid fa-pen iconParametre"></i>Gérer les profils
                </li>
                <li className="nav-menu-vertical-line">
                  <i class="fa-regular fa-circle-right iconParametre"></i>Transférer un profil
                </li>
                <li className="nav-menu-vertical-line">
                  <i className="fa-regular fa-user iconParametre"></i>Compte
                </li>
                <li className="nav-menu-vertical-line">
                  <i class="fa-regular fa-circle-question iconParametre"></i>Centre d'aide
                </li>
              <div className="logout">Se déconnecter</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {toogleMenuSlider && <NavSlider />}
    </>
  );
};

export default Nav;
