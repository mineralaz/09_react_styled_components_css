import styled from 'styled-components';
import './App.css';

// sukuriam h1 elementa pavadinimu Title naudodami styled components
const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

function App() {
  return (
    <div className="App">
      <Title>React styled components</Title>
    </div>
  );
}

export default App;
