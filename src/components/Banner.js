import React from "react";
import '../styles/Banner.scss'

const Banner = () => {
    return (
        <header className="banner">
           <div className="banner-container">
            
            
            <h1 className="banner-title">Titre img</h1>
            <p className="banner-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Expedita, facilis vitae blanditiis harum magni impedit
                  laudantium natus perferendis?
                  Ratione, nam officiis.
                 Necessitatibus repellat quaerat animi fugit! Repellat labore deserunt aut?
            </p>
            <div className="banner-btns">
                <button className="banner-btn1"><i className="fa-sharp fa-solid fa-play banner-icon1"></i> Lecture</button>
                <button className="banner-btn2"><i className="fa-solid fa-info banner-icon2"></i>Plus d'infos</button>
            </div>

           </div>

        </header>
    );
};

export default Banner;