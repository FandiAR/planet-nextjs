import { Grid, Text } from '../../components';

const DetailofPlanet = (props) => {
  const { data } = props;

  // converting lower case to title case
  const titleCase = (str) => str.toLowerCase().split(' ')
    .map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');

  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <Text variant="body1">Climate</Text>
        <Text variant="body1">Diameter</Text>
        <Text variant="body1">Gravity</Text>
        <Text variant="body1">Orbital Period</Text>
        <Text variant="body1">Population</Text>
        <Text variant="body1">Rotation Period</Text>
        <Text variant="body1">Surface Water</Text>
        <Text variant="body1">Terrain</Text>
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
        <Text variant="body1">{`: ${titleCase(data.climate)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.diameter)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.gravity)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.orbital_period)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.population)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.rotation_period)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.surface_water)}`}</Text>
        <Text variant="body1">{`: ${titleCase(data.terrain)}`}</Text>
      </Grid>
    </Grid>
  );
};
export default DetailofPlanet;
