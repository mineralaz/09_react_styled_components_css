import styled from 'styled-components';
import { Icon } from '../styled/UI.styled';

const SingleCardLiEl = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

const SingleCardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const SingleCardDescr = styled.p`
  color: #556987;
`;

function SingleCard(props) {
  return (
    <SingleCardLiEl>
      <Icon icon={props.icon}></Icon>
      <SingleCardTitle>{props.title}</SingleCardTitle>
      <SingleCardDescr>{props.descr}</SingleCardDescr>
    </SingleCardLiEl>
  );
}
export default SingleCard;
