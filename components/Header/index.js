import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, SearchBox, Text } from '..';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.white,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    color: theme.palette.primary.blue,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const FixedHeader = (props) => {
  const { handleSearch, searchName } = props;
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Text variant="h5" className={classes.title}>
            WHIM UNIVERSE
          </Text>
          <SearchBox handleSearch={handleSearch} searchName={searchName} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default FixedHeader;
