import { useState, useEffect } from 'react';
import { parseISO, isAfter, format } from 'date-fns';

const useEventFilter = (events) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filterCriteria, setFilterCriteria] = useState({
    name: '',
    dateEvent: '',
    upcoming: false,
  });

  useEffect(() => {
    const filterByName = (event) =>
      event.name.toLowerCase().includes(filterCriteria.name.toLowerCase());

    const filterByDate = (event) => {
      const dateEvent = format(parseISO(event.dateEvent), 'yyyy/MM/dd');
      const filterDate = format(
        parseISO(filterCriteria.dateEvent),
        'yyyy/MM/dd'
      );
      if (dateEvent >= filterDate) {
        return event;
      }
    };

    const filterUpcoming = (event) => {
      const currentDate = new Date();
      const eventDate = parseISO(event.dateEvent);
      return isAfter(eventDate, currentDate);
    };

    const filtered =
      filterCriteria.name && filterCriteria.dateEvent
        ? events.filter(
            (event) =>
              filterByName(event) &&
              filterByDate(event) &&
              (!filterCriteria.upcoming || filterUpcoming(event))
          )
        : filterCriteria.name
        ? events.filter(
            (event) =>
              filterByName(event) &&
              (!filterCriteria.upcoming || filterUpcoming(event))
          )
        : filterCriteria.dateEvent
        ? events.filter(
            (event) =>
              filterByDate(event) &&
              (!filterCriteria.upcoming || filterUpcoming(event))
          )
        : filterCriteria.upcoming
        ? events.filter((event) => filterUpcoming(event))
        : events;

    setFilteredEvents(filtered);
  }, [events, filterCriteria]);

  const updateFilterCriteria = (name, value) => {
    setFilterCriteria((prevCriteria) => ({ ...prevCriteria, [name]: value }));
  };

  const resetFilters = () => {
    setFilterCriteria({
      name: '',
      dateEvent: '',
      upcoming: false,
    });
  };

  return { filteredEvents, filterCriteria, updateFilterCriteria, resetFilters };
};

export default useEventFilter;
