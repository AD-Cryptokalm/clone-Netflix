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
    document.addEventListener('scroll', scrollNav);
  });
  const handleClick = () => {
    toogleMenuSlider ? setToogleMenuSlider(false) : setToogleMenuSlider(true);
  }
  
  return (
    <>
    <div className={`nav ${navBlack && "nav-black"}`}>
      <button className="nav-burger" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <img src="./images/logo.png" alt="logo entreprise" className="nav-logo" />
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
        <a href="/" className="nav-action">
          <img src="./images/avatar.png" alt="" />
        </a>
      </div>
    </div>
    {toogleMenuSlider && (
        <NavSlider/>
    )}
    </>
  );
};

export default Nav;
