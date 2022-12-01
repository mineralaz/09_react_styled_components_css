import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Pill = styled.p`
  color: var(--primary-500);
  background-color: var(--primary-100);
  text-align: center;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 50px;
  display: inline-block;
`;

const MainSectionTitle = styled.h2`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 46px;
`;

const SectionSubtitle = styled.h3`
  color: #556987;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
`;

function SectionTitle(props) {
  return (
    <Wrap>
      {props.pill && <Pill>{props.pill}</Pill>}
      <MainSectionTitle color={props.color}>{props.title}</MainSectionTitle>
      <SectionSubtitle>{props.subtitle}</SectionSubtitle>
    </Wrap>
  );
}
export default SectionTitle;
