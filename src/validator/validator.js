import moment from 'moment';

function isIntersect(listEvents, event) {
  const existingEvent = listEvents.find((e) => {
    if (event.id === e.id) return false;
    if (moment(event.endDate) <= moment(e.startDate)
      || moment(event.startDate) >= moment(e.endDate)) return false;
    return true;
  });
  return !!existingEvent;
}

function isDurationExceeded(event) {
  const SIX_HOURS = 6 * 60 * 60 * 1000;
  return moment(event.endDate) - moment(event.startDate) > SIX_HOURS;
}

function isFinishToday(event) {
  const startDate = moment(event.startDate).format('YYYY-MM-DD');
  const endDate = moment(event.endDate).format('YYYY-MM-DD');
  return endDate === startDate;
}

function isValidTime(event) {
  return moment(event.endDate) > moment(event.startDate);
}

function validator(listEvents, event) {

  if (!isValidTime(event)) {
    alert('Событие должно заканчиваться позже чем начинаться!');
    return false;
  }

  if (isIntersect(listEvents, event)) {
    alert('У Вас уже запланировано событие на это время!');
    return false;
  }

  if (isDurationExceeded(event)) {
    alert('Событие не может длиться дольше 6-ти часов!');
    return false;
  }

  if (!isFinishToday(event)) {
    alert('Событие должно начаться и закончиться в пределах одного дня!');
    return false;
  }

  return true;
}

export default validator;