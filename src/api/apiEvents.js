import axios from 'axios';

const config = axios.create({
  baseURL: 'https://apimernfinal.onrender.com/',
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

async function getEventIdApi(id) {
  try {
    const response = await config.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function postEventApi(event) {
  try {
    const response = await config.post('/', event);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function putEventApi(id, event) {
  try {
    const response = await config.put(`/${id}`, event);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteEventApi(id) {
  try {
    const response = await config.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getEventsApi,
  getEventIdApi,
  postEventApi,
  putEventApi,
  deleteEventApi,
};
