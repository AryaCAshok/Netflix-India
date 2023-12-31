import logo from './logo.svg';
import './App.css';
import Row from "./Components/Row"
import { requests } from './request';
import Banner from './Components/Banner';
import Navigationbar from './Components/Navigationbar';



function App() {
  return (
    <div >
      <Navigationbar/>
      <Banner fetchurl={requests.fetchNetflixOriginals} />
      <Row title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchurl={requests.fetchTrending} />
      <Row title="TopRated" fetchurl={requests. fetchTopRated} />
      <Row title="ActionMovies" fetchurl={requests. fetchActionMovies} />
      <Row title="ComedyMovies" fetchurl={requests. fetchComedyMovies} />
      <Row title="HorrorMovies" fetchurl={requests. fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchurl={requests. fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests. fetchDocumentaries} />


    </div>
  );
}

export default App;
