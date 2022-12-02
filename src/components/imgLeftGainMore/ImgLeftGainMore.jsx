import SectionImg from '../../assets/img/sectionImg.png';
import { Button, Container, Flex, Section } from '../styled/UI.styled';
import SectionTitle from '../UI/sectionTitle/SectionTitle';

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
};
function ImgLeftGainMore(props) {
  return (
    <Section>
      <Container>
        <Flex gap="90px">
          <img src={SectionImg} alt="" />
          <div>
            <SectionTitle
              left
              largeSide
              pill={sectionData.sectionTitle.pill}
              subtitle={sectionData.sectionTitle.subtitle}
              title={sectionData.sectionTitle.title}
            />
            <Button>Get Started</Button>
          </div>
        </Flex>
      </Container>
    </Section>
  );
}
export default ImgLeftGainMore;
