import { useState, useEffect } from 'react';
import { parseISO, isAfter, format } from 'date-fns';

const useEventFilter = (events) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filterCriteria, setFilterCriteria] = useState({
    name: '',
    dateEvent: '',
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
    const filtered =
      filterCriteria.name && filterCriteria.dateEvent
        ? events.filter((event) => filterByName(event) && filterByDate(event))
        : filterCriteria.name
        ? events.filter((event) => filterByName(event))
        : filterCriteria.dateEvent
        ? events.filter((event) => filterByDate(event))
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
    });
  };

  return { filteredEvents, filterCriteria, updateFilterCriteria, resetFilters };
};

export default useEventFilter;
