import { events } from '../slices';
import api from '../../api/apiEvents';

export const getEvents = (page, limit) => {
  return async (dispatch, getState) => {
    dispatch(events.startLoadingEvents());
    const response = await api.getEventsApi(page, limit);
    dispatch(
      events.setEvents({
        events: response.events,
        page: response.currentPage,
        totalPages: response.totalPages,
        totalEvents: response.totalEvents,
      })
    );
  };
};
