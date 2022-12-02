import GainDataList from '../GainDataList';
import { Container, Section } from '../styled/UI.styled';
import SectionTitle from '../UI/sectionTitle/SectionTitle';

const sectionData = {
  sectionTitle: {
    pill: 'Numbers',
    title: 'We believe in the power of data',
    subtitle:
      ' Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.',
  },
  statistics: [
    { id: 1, numbers: '235.000', descr: 'Projects completed' },
    { id: 2, numbers: '$10m', descr: 'APR' },
    { id: 3, numbers: '+50.000', descr: 'Hours Saved Annually' },
    { id: 4, numbers: '3.500', descr: 'Unique Users' },
  ],
};

function WeBelieve(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.subtitle}
          title={sectionData.sectionTitle.title}
        />
        <GainDataList items={sectionData.statistics} cols="4" />
      </Container>
    </Section>
  );
}
export default WeBelieve;
