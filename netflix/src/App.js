
import './App.css'
import Banner from './component/Banner/Banner';
import Navbar from './component/Navbar/Navbar';
import Row from './component/row/Row';
import requests from './requests';




function App() {

  return (
    <div className='app container'>
      <Navbar/>
      <div>
        <Banner/>
      </div>
      <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.Originals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.Trending}/>
      <Row title="Comedy Movies" fetchUrl={requests.Comedy}/>
      <Row title="Romance Movies" fetchUrl={requests.RomanceMovies}/>
      <Row title="Action Movies" fetchUrl={requests.Action}/>
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.Documentaries}/>
    </div>
    </div>
  );
}

export default App;
