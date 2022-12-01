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
// Icon
// nustatem papildomus atributus priklausancius nuo props
export const Icon = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
  ariaHidden: true,
}))`
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 24px !important;
  width: 64px;
  height: 64px;
  color: #fff;
  background-color: var(--primary-500);
  border-radius: 6px;
`;

// button type submit
// default attributes
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  font-size: 2rem;
`;
