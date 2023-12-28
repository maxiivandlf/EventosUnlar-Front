import { _post, _get } from '../api';

export const createEvent = async (data) => {
  const response = await _post('/events', data);
  return response;
};

export const getEventId = async (id) => {
  const response = await _get(`/events/${id}`);
  return response;
};
