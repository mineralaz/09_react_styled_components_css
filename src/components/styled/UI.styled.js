import styled from 'styled-components';

// susikurti Section styled componenta
export const Section = styled.section`
  padding-top: 6%;
  padding-bottom: 5%;
`;
// susikurti Container styled componenta
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;
// susikurti Grid  componenta
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || '3'}, 1fr);
  gap: 1rem;
  margin-top: 0;
  list-style: none;
  padding-left: 0;
`;
// susikurti SingleCard componenta, naudojant styled componentus
