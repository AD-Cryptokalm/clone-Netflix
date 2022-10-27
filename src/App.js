
import './styles/App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requestsApi from './config/RequestsApi';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <Row title="Netflix original" url={requestsApi.fetchNetflixOriginals}/>
     <Row title="Films les mieux notés" url={requestsApi.fetchTopRated}/>
     <Row title="Films d'action"  url={requestsApi.fetchActionMovies}/>
     <Row title="Comédies" url={requestsApi.fetchComedyMovies}/>
     <Row title="Films d'horreur" url={requestsApi.fetchHorrorMovies}/>
     <Footer/>
    </div>

    
  );
}

export default App;
