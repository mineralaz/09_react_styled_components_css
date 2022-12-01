import SingleCard from './singleCard/SingleCard';
import { Grid } from './styled/UI.styled';

function GainCardsList(props) {
  return (
    <Grid>
      {props.items.map((cObj) => (
        // generuoti SingleCard komponetus
        <SingleCard
          key={cObj.id}
          icon={cObj.icon}
          descr={cObj.descr}
          title={cObj.title}
        />
      ))}
    </Grid>
  );
}
export default GainCardsList;
