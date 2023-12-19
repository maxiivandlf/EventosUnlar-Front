import { events } from '../slices';
import getEventsApi from '../../api/getEvents';

export const getEvents = (page, limit) => {
  return async (dispatch, getState) => {
    dispatch(events.startLoadingEvents());
    const response = await getEventsApi(page, limit);
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
