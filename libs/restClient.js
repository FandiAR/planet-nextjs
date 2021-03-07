import axios from 'axios';

const restClient = (method, url) => {
  const headers = { 'Content-Type': 'application/json' };

  switch (method) {
    case 'get':
      return axios.get(url, { headers })
        .catch((error) => {
          throw error;
        });
    default:
  }
  return '';
};
export default restClient;
