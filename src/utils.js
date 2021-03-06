import moment from 'moment';

const DEPRECATION_MESSAGE = 'isSameUser and isSameDay should be imported from the utils module instead of using the props functions';

export function isSameDay(currentMessage = {}, diffMessage = {}) {

  if (!diffMessage.createdAt) {
    return false
  }

  let currentCreatedAt = moment(currentMessage.createdAt);
  let diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }
  return currentCreatedAt.isSame(diffCreatedAt, 'day');

}

export function isIn5Minute(currentMessage = {}, diffMessage = {}) {

  if (!diffMessage.createdAt) {
    return false
  }

  let currentCreatedAt = moment(currentMessage.createdAt);
  let diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }
  return Math.abs(currentCreatedAt.diff(diffCreatedAt, 'seconds')) < 60 * 5;

}

export function isSameUser(currentMessage = {}, diffMessage = {}) {

  //return !!(diffMessage.user && currentMessage.user && diffMessage.user._id === currentMessage.user._id);
  return false;

}

export function warnDeprecated(fn) {

  return (...args) => {
    console.warn(DEPRECATION_MESSAGE);
    return fn(...args);
  };

}
