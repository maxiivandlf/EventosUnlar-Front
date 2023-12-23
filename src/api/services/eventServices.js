import { _post, _get } from '../api';

export const createEvent = async (data) => {
  const response = await _post('/', data);
  return response;
};

export const getEventId = async (id) => {
  const response = await _get(`/${id}`);
  return response;
};

export const getAllEvents = async (page, limit) => {
  const response = await _get(`/?page=${page}&limit=${limit}`);
  return response;
};
