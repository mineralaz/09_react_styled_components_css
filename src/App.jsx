import './App.css';
import { Title, Button, LargeButton } from './components/styled/Demo.styled.js';

function App() {
  return (
    <div className="App">
      <Title>React styled components</Title>
      <Button onClick={() => console.count('clicked')}>
        Styled button component
      </Button>
      <Button sm>Styled button component</Button>
      <LargeButton sm>Styled button component</LargeButton>
    </div>
  );
}

export default App;
