import './App.css';
import Greeting from './components/Greeting';
import Home from '.components/Home';
import MediaRow from './MediaRow';

const App = () => {
  const sitename = 'WSK Super site';
  const styles = {
    backgroundColor: 'gray',
    color: 'red',
  };

  return (
    <>
      <h1 className="otsikko">{sitename}</h1>
      <p>Tässä sivu {3 + 4}</p>
      <p style={{styles}}>päpäpasäpdaäspdasjdhaskjhflkanskjfhakslfmnlkaksf</p>
      <Greeting name="Konsta" age={23} isStudent={true} />
      <Greeting name="Kalle" age={22} isStudent={false} />
      <Greeting name="Iiro" age={43} isStudent={true} />
    </>
  );
};

export default App;

//npm run dev, avaa selaimeen.
//tee exercise: first components
