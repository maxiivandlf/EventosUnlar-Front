import axios from 'axios';

const config = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getEventsApi(page, limit) {
  try {
    const response = await config.get(`/?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getEventsApi;
