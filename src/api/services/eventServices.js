import { _post, _get, _delete, _put } from '../api';

export const createEvent = async (data) => {
  const response = await _post('/events', data);
  return response;
};

export const getEventId = async (id) => {
  const response = await _get(`/events/${id}`);
  return response;
};
export const deleteEvent = async (id) => {
  const response = await _delete(`/events/${id}`);
  return response;
};

export const updateEvent = async (id, data) => {
  const response = await _put(`/events/${id}`, data);
  return response;
};
