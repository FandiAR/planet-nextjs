import Head from 'next/head';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import restClient from '../../libs/restClient';
import {
  Alert, Grid, Header, Text,
} from '../../components';
import ListPlanet from './ListPlanet';
import ModalsDetailPlanet from './ModalsDetailPlanet';

const useStyles = makeStyles((theme) => ({
  planetsContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  },
  listTitle: {
    color: theme.palette.primary.black,
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: '10px',
    padding: '10px',
  },
  empty: {
    margin: '50px auto',
    textAlign: 'center',
    color: theme.palette.primary.red,
  },
}));

const PlanetsContainer = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [detailData, setDetailData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const onCloseAlert = () => {
    setOpenAlert(false);
  };

  const getPlanets = () => {
    const baseUrl = 'https://swapi.dev/api/';
    restClient('get', `${baseUrl}planets`)
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        setOpenAlert(true);
        setMessageAlert(error.message);
      });
  };
  useEffect(() => {
    getPlanets();
  }, []);

  const handleCardClick = (url) => {
    restClient('get', url)
      .then((response) => {
        setDetailData(response.data);
        setOpenModal(true);
      })
      .catch((error) => {
        setOpenAlert(true);
        setMessageAlert(error.message);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearch = (e) => {
    setSearchName(e);
  };

  let searchResults = [];
  if (searchName) {
    results.forEach((data) => {
      searchResults.push(data);
      const dataSearch = searchResults.filter((item) => item.name.toLowerCase().includes(searchName.toLowerCase()));
      if (dataSearch) searchResults = dataSearch;
    });
  } else searchResults = results;

  const content = searchResults.map((data) => (
    <Grid item xs={12} sm={4} md={3} lg={2} xl={2} key={`${data.url}-${data.name}`} className={classes.card}>
      <ListPlanet data={data} handleCardClick={() => handleCardClick(data.url)} />
    </Grid>
  ));
  const empty = (
    <Grid item className={classes.empty}>
      <img src="empty-list.svg" alt="Empty List" />
      <Text variant="h6">Data not found!</Text>
      <Text variant="h6">Search with another planet name... :-)</Text>
    </Grid>
  );

  return (
    <>
      <Head>
        <title>WHIM | Planets</title>
      </Head>
      <div className={classes.planetsContainer}>
        <Header data={results} handleSearch={handleSearch} />
        <Text variant="h5" className={classes.listTitle}>
          List of Planets in WHIM Universe
        </Text>
        <Grid container className={classes.cardsContainer}>
          {
            searchResults.length > 0
              ? content
              : empty
          }
        </Grid>
      </div>
      <ModalsDetailPlanet
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        data={detailData}
      />
      <Alert
        open={openAlert}
        message={messageAlert}
        onCloseAlert={onCloseAlert}
      />
    </>
  );
};
export default PlanetsContainer;
