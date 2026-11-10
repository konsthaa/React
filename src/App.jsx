import './App.css';
import Home from './components/Home';

const App = () => {
  const sitename = 'WSK Super site';

  return (
    <>
      <h1 className="otsikko">{sitename}</h1>
      <p>Tässä sivu {3 + 4}</p>
      {/*existing content*/}
      <Home />
    </>
  );
};

export default App;
