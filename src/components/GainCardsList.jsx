import SingleCard from './singleCard/SingleCard';
import { Grid } from './styled/UI.styled';

function GainCardsList(props) {
  return (
    <Grid cols={props.cols}>
      {props.items.map((cObj) => (
        // generuoti SingleCard komponetus
        <SingleCard
          left={props.left}
          iconLeft={props.iconLeft}
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
