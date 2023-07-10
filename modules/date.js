import { DateTime } from './luxon.js';

// eslint-disable-next-line import/prefer-default-export
export const printDateTime = () => {
  const dateTimeElement = document.querySelector('.date-time');
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  dateTimeElement.textContent = now;
};