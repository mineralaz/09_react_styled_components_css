import './App.css';
import Cta from './components/cta/Cta';
import GainMore from './components/gainMore/GainMore';
import Nav from './components/nav/Nav';
import SecondGainMore from './components/secondGainMore/SecondGainMore';

function App() {
  return (
    <div className="App">
      <Nav />
      <GainMore />
      <Cta />
      <SecondGainMore />
    </div>
  );
}

export default App;
