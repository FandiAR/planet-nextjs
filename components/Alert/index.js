import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { Text } from '..';

const useStyles = makeStyles(() => ({
  alertBox: {
    minWidth: '40vW',
    padding: '5px 10px',
  },
}));

const StyledAlert = ({
  open = false,
  message = '',
  severity = 'error',
  onCloseAlert,
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      autoHideDuration={2000}
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => onCloseAlert()}
    >
      <Alert
        elevation={6}
        variant="standard"
        severity={severity}
        className={classes.alertBox}
      >
        {
          severity === 'error'
            ? <AlertTitle variant="body1"><strong>Failed!</strong></AlertTitle>
            : <AlertTitle variant="body1"><strong>Success!</strong></AlertTitle>
        }
        <Text variant="body1">{message}</Text>
      </Alert>
    </Snackbar>
  );
};
export default StyledAlert;

StyledAlert.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  severity: PropTypes.string,
  onCloseAlert: PropTypes.func,
};

StyledAlert.defaultProps = {
  open: false,
  message: '',
  severity: 'error',
  onCloseAlert: () => { },
};
