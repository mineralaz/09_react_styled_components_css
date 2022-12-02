import SingleData from './singleData/SingleData';
import { Grid } from './styled/UI.styled';

function GainCardsList(props) {
  return (
    <Grid cols={props.cols}>
      {props.items.map((cObj) => (
        <SingleData key={cObj.id} descr={cObj.descr} numbers={cObj.numbers} />
      ))}
    </Grid>
  );
}
export default GainCardsList;
