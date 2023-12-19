import { events } from '../slices';
import apiEvents from '../../api/apiEvents';

export const getEvents = (page, limit) => {
  return async (dispatch, getState) => {
    dispatch(events.startLoadingEvents());
    const response = await apiEvents(page, limit);
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
