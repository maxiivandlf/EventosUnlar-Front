import axios from 'axios';

const config = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
async function getEvents() {
  try {
    const response = await config.get('/');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default getEvents;
