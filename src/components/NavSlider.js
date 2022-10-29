import '../styles/NavSlider.scss'

const NavSlider = () => {
    return (
        <div className="slider">
            <div className="slider-profil-container">
                <div className="slider-profil">
                    <img src="./images/avatar.png" alt="" className="slider-img" />
                    <div className="slider-updateProfil">
                        <p className="slider-pseudo">Niko</p>
                        <a href="/" className="slider-update">Changer de profil</a>
                    </div>
                </div>
                <div className="slider-containerLinksUser">
                <a href="/" className="slider-linkUser">Compte</a>
                <a href="/" className="slider-linkUser">Centre d'aide</a>
                <a href="/" className="slider-linkUser">Se déconnecter</a>
                </div>
            </div>
            <div className="slider-containerLinksMovies">
                <ul className="slider-linksMovies">
                    <li className="slider-linkMovies">Accueil</li>
                    <li className="slider-linkMovies">Ma liste</li>
                    <li className="slider-linkMovies">Thrillers</li>
                    <li className="slider-linkMovies">Jeunesse et famille</li>
                    <li className="slider-linkMovies">Films et séries internationnales</li>
                    <li className="slider-linkMovies">Téléréalité</li>
                    <li className="slider-linkMovies">Films et séries françaises</li>
                    <li className="slider-linkMovies">Action</li>
                    <li className="slider-linkMovies">Anime</li>
                    <li className="slider-linkMovies">Comédie</li>
                    <li className="slider-linkMovies">Fantastique</li>
                    <li className="slider-linkMovies">SF</li>
                    <li className="slider-linkMovies">Horreur</li>
                    <li className="slider-linkMovies">Stand-up</li>
                    <li className="slider-linkMovies">Documentaires</li>
                    <li className="slider-linkMovies">Films et séries européennes</li>
                    <li className="slider-linkMovies">Musique et comédies</li>
                </ul>
            </div>
        </div>
    );
};

export default NavSlider;