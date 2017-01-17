import { Map } from 'immutable';
import { connect } from 'react-redux';
import moment from 'moment';

import OpenClosedChart from 'components/OpenClosedChart';

const getWeekFrom = (date) => {
  const week = {
    end: moment(date).endOf('day'),
    start: moment(date).subtract(1, 'week').startOf('day'),
  };

  return { ...week, name: week.start.format('MMM D') };
};

const buildWeeksBetween = (date, weekStart) => {
  const currentWeekStart = moment(weekStart);
  const weeks = [];

  while (date < currentWeekStart) {
    const prevWeekEnd = moment(currentWeekStart).subtract(1, 'day');
    weeks.push(getWeekFrom(prevWeekEnd));
    currentWeekStart.subtract(1, 'week');
  }

  return weeks;
};

const findWeekWhen = (weeks, closedAt) => weeks.find(({ start, end }) =>
  start.isSameOrBefore(closedAt) && end.isSameOrAfter(closedAt));

const extractPr = pr => ({
  id: pr.get('number'),
  createdAt: moment(pr.get('created_at')),
  closedAt: pr.get('closed_at') ? moment(pr.get('closed_at')) : null,
});

const openClosedByWeek = (prList) => {
  if (!prList || !prList.size) return [];

  const idList = prList.keySeq().sort().reverse();

  return idList.reduce((weeks, id) => {
    const pr = prList.get(id);
    const { createdAt, closedAt } = extractPr(pr);
    let week = weeks[weeks.length - 1];

    if (createdAt.isBefore(week.start)) {
      const emptyWeeks = buildWeeksBetween(createdAt, week.start);
      weeks = weeks.concat(emptyWeeks);  // eslint-disable-line no-param-reassign
      week = emptyWeeks.pop();
    }

    week.open = (week.open || 0) + 1;

    if (closedAt) {
      const closedWeek = findWeekWhen(weeks, closedAt);
      closedWeek.closed = (closedWeek.closed || 0) + 1;
    }

    return weeks;
  }, [getWeekFrom(moment())]);
};

export default connect(
  ({ pr }) => ({
    data: openClosedByWeek(pr.get('byId'), Map()).reverse(),
  }),
)(OpenClosedChart);
