import './App.css';
import Cta from './components/cta/Cta';
import GainMore from './components/gainMore/GainMore';
import ImgLeftGainMore from './components/imgLeftGainMore/ImgLeftGainMore';
import ImgRightGainMore from './components/imgRightGainMore.jsx/ImgRightGainMore';
import Nav from './components/nav/Nav';
import SecondGainMore from './components/secondGainMore/SecondGainMore';

function App() {
  return (
    <div className="App">
      <Nav />
      <GainMore />
      <Cta />
      <SecondGainMore />
      <ImgLeftGainMore />
      <ImgRightGainMore />
    </div>
  );
}

export default App;
