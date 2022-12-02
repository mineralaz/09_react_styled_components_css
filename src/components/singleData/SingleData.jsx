import styled from 'styled-components';

const SingleDataEl = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const SingleDataNumbers = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  color: var(--primary-500);
  margin-bottom: 0px;
`;
const SingleCardDescr = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #556987;
`;

function SingleData(props) {
  return (
    <SingleDataEl>
      <SingleDataNumbers>{props.numbers}</SingleDataNumbers>
      <SingleCardDescr>{props.descr}</SingleCardDescr>
    </SingleDataEl>
  );
}
export default SingleData;
