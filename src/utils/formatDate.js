import format from 'date-fns/format';
import esLocale from 'date-fns/locale/es';

const formatDate = (fechaISO) => {
  const fecha = new Date(fechaISO);
  const dateformated = {
    month: format(fecha, 'LLL', { locale: esLocale }),
    day: format(fecha, 'dd', { locale: esLocale }),
    year: format(fecha, 'yyyy', { locale: esLocale }),
    hour: format(fecha, 'HH:mm', { locale: esLocale }),
    minutes: format(fecha, 'mm', { locale: esLocale }),
  };
  return dateformated;
};

export default formatDate;
