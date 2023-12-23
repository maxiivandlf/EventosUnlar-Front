import { events } from '../slices';

import { _get } from '../../api/api';

export const getEvents = (page, limit) => {
  return async (dispatch, getState) => {
    dispatch(events.startLoadingEvents());
    const response = await _get(`/?page=${page}&limit=${limit}`);
    dispatch(
      events.setEvents({
        events: response.data.events,
        page: response.data.currentPage,
        totalPages: response.data.totalPages,
        totalEvents: response.data.totalEvents,
      })
    );
  };
};
