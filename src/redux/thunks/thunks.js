import { events } from '../slices';

import { _get, _post } from '../../api/api';

export const getEvents = (page, limit) => {
  return async (dispatch, getState) => {
    dispatch(events.startLoadingEvents());
    const response = await _get(`/events/?page=${page}&limit=${limit}
    `);
    dispatch(
      events.setEvents({
        events: response.data.events,
        page: response.data.currentPage,
        totalPages: response.data.totalPages,
        totalEvents: response.data.totalEvents,
      })
    );
    return response;
  };
};

export const createEvent = (event) => {
  return async (dispatch, getState) => {
    dispatch(events.startLoadingEvents());
    const response = await _post(`/events`, event);

    dispatch(
      events.updateEvents({
        events: response.data._newEvent,
      })
    );
    return response;
  };
};
