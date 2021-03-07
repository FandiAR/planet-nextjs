import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Text } from '../../components';

const useStyles = makeStyles((theme) => ({
  actions: {
    padding: '15px',
    cursor: 'pointer',
  },
  textLink: {
    color: theme.palette.primary.blue,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const PlanetCard = (props) => {
  const classes = useStyles();
  const { data, handleCardClick } = props;

  return (
    <Card onClick={handleCardClick}>
      <CardActionArea>
        <CardContent>
          <Text gutterBottom variant="h5" component="h2">
            {`Planet ${data.name}`}
          </Text>
          <Text variant="body2">
            {`Diameter: ${data.diameter}`}
          </Text>
          <Text variant="body2">
            {`Orbital Period: ${data.orbital_period}`}
          </Text>
          <Text variant="body2">
            {`Rotation Period: ${data.rotation_period}`}
          </Text>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Text variant="body1" className={classes.textLink}>Click for detail</Text>
      </CardActions>
    </Card>
  );
};
export default PlanetCard;
