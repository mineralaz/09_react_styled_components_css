import GainCardsList from '../GainCardsList';
import { Container, Grid, Section } from '../styled/UI.styled';
import SectionTitle from '../UI/sectionTitle/SectionTitle';

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
  gainCards: [
    {
      id: 1,
      icon: 'envelope-o',
      title: 'Measure your performance',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 2,
      icon: 'google-wallet',
      title: 'Custom analytics',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 3,
      icon: 'users',
      title: 'Team Management',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 4,
      icon: 'pencil-square-o',
      title: 'Build your website',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 5,
      icon: 'windows',
      title: 'Connect multiple apps',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 6,
      icon: 'cog',
      title: 'Easy setup',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
  ],
};

function GainMore(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.subtitle}
          title={sectionData.sectionTitle.title}
        />
        <GainCardsList items={sectionData.gainCards} />
      </Container>
    </Section>
  );
}
export default GainMore;
