import styled from 'styled-components';
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
  font-size: ${(props) => (props.sm ? '0.9rem' : '1.5rem')};
  color: white;

  transition: all 0.3s;
  &:hover {
    background-color: white;
    color: brown;
  }
`;
// panaudoti jsx
// large button, paveldi viska is button, perrasom ka mums reikia
const LargeButton = styled(Button)`
  padding: 0.9em 1.8em;
  text-transform: uppercase;
`;
