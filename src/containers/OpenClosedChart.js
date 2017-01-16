import { OrderedMap } from 'immutable';
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

const findWeekWhen = (weeks, closedAt) => weeks.find(({ start, end }) =>
  start.isSameOrBefore(closedAt) && end.isSameOrAfter(closedAt));

const extractPr = pr => ({
  id: pr.get('number'),
  createdAt: moment(pr.get('createdAt')),
  closedAt: pr.get('closedAt') ? moment(pr.get('closedAt')) : null,
});

const openClosedByWeek = (prList) => {
  if (!prList || !prList.size) return [];

  const firstPr = prList.get(prList.keySeq().first());
  const newestDate = extractPr(firstPr).createdAt;

  return prList.reduce((weeks, pr) => {
    const { createdAt, closedAt } = extractPr(pr);
    let week = weeks[weeks.length - 1];

    if (createdAt.isBefore(week.start)) {
      const newWeek = getWeekFrom(week.start.subtract(1, 'day'));
      weeks.push(newWeek);
      week = newWeek;
    }

    week.open = (week.open || 0) + 1;

    if (closedAt) {
      const closedWeek = findWeekWhen(weeks, closedAt);
      closedWeek.closed = (closedWeek.closed || 0) + 1;
    }

    return weeks;
  }, [getWeekFrom(newestDate)]);
};

export default connect(
  ({ pr }) => ({
    data: openClosedByWeek(pr.get('byId'), OrderedMap()).reverse(),
  }),
)(OpenClosedChart);
