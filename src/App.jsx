import styled from 'styled-components';
import './App.css';

// sukuriam h1 elementa pavadinimu Title naudodami styled components
const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

// sukurti button komponenta, prideti jam stiliaus
const Button = styled.button`
  background-color: brown;
  padding: 0.5em 1em;

  font-size: 2rem;
  color: white;
  transition: all 0.3s;
  &:hover {
    background-color: green;
    padding: 1em 2em;
  }
`;
// panaudoti jsx

function App() {
  return (
    <div className="App">
      <Title>React styled components</Title>
      <Button>Styled button component</Button>
    </div>
  );
}

export default App;
