
import './App.css'
import Row from './component/row/Row';
import requests from './requests';




function App() {

  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.Originals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.Trending}/>
      <Row title="Comedy Movies" fetchUrl={requests.Comedy}/>
      <Row title="Romance Movies" fetchUrl={requests.RomanceMovies}/>
      <Row title="Action Movies" fetchUrl={requests.Action}/>
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.Documentaries}/>
    </div>
  );
}

export default App;
