import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    border: `solid 1px ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.black,
    '&:hover': {
      backgroundColor: theme.palette.primary.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '350px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.primary.black,
    [theme.breakpoints.up('md')]: {
      width: '350px',
    },
  },
}));

const SearchBox = (props) => {
  const { handleSearch, searchName } = props;
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search by planet name e.g Tattooine"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleSearch(e.target.value)}
        value={searchName}
        inputRef={(input) => input && input.focus()}
      />
    </div>
  );
};
export default SearchBox;
