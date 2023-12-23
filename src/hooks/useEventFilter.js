import { useState, useEffect } from 'react';

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
      return console.log(event.dateEvent);
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
