import { Container, Section } from '../styled/UI.styled';
import SectionTitle from '../UI/sectionTitle/SectionTitle';

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
};

function SecondGainMore(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          left
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.subtitle}
          title={sectionData.sectionTitle.title}
        />
      </Container>
    </Section>
  );
}
export default SecondGainMore;
