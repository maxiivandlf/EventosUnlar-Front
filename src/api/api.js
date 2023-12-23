import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apimernfinal.onrender.com',
  headers: {
    Accept: 'application/json',
  },
});

export const _post = async (url, data, auth = null) => {
  try {
    const response = await api.post(url, data, {
      auth: auth,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    return null;
  }
};

export const _get = async (url, auth = null) => {
  try {
    const response = await api.get(url, {
      auth: auth,
    });
    return response;
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    return null;
  }
};

export const _delete = async (url, id, auth = null) => {
  try {
    const response = await api.delete(url, id, {
      auth: auth,
    });
    return response;
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    return null;
  }
};
export const _put = async (url, id, data, auth = null) => {
  try {
    const response = await api.put(url, id, data, {
      auth: auth,
    });
    return response;
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    return null;
  }
};
