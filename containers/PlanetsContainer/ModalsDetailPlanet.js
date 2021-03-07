import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../src/theme';
import { Divider, Grid, Text } from '../../components';
import DetailofPlanet from './Detail';

const useStyles = makeStyles({
  modalDetail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginVert10: {
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: theme.palette.primary.grey,
  },
  bodyModalDetail: {
    position: 'relative',
    background: theme.palette.primary.white,
    padding: '30px',
    width: '30%',
    outline: 'none !important',
    borderRadius: '10px',
    overflow: 'auto',
  },
  closeButton: {
    textAlign: 'right',
    cursor: 'pointer',
    color: theme.palette.primary.red,
  },
});

const ModalsDetailPlanet = (props) => {
  const classes = useStyles();
  const { data, openModal, handleCloseModal } = props;

  const content = (
    <div className={classes.bodyModalDetail}>
      <Grid container>
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
          <Text variant="h4" id="simple-modal-title">
            {`Planet ${data.name}`}
          </Text>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.closeButton}>
          <Text variant="h5" id="simple-modal-title" onClick={handleCloseModal}>X Close</Text>
        </Grid>
      </Grid>
      <Divider className={classes.marginVert10} />
      <DetailofPlanet data={data} />
    </div>
  );

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modalDetail}
    >
      {content}
    </Modal>
  );
};
export default ModalsDetailPlanet;
