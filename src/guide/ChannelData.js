import moment from "moment";

import TimeCell from "./TimeCell";
import classes from './ChannelData.module.css'

function getTimeOfDay(momentTime) {
  const timeHour = +(moment(momentTime).format('H')) * 60
  const timeMinute = +(moment(momentTime).format('m'))
  const atMoment = timeHour + timeMinute;
  return atMoment
}

const ChannelData = (props) => {

  const timeCells = [];
  for (let index = 0; index < props.schedules.length; index++) {
    let startOfDay = moment().startOf('day')
    let schedule = props.schedules[index]
    const { id, title, start, end } = schedule
    const startsAtBeginning = startOfDay.format('HH:mm') === moment(start).format('HH:mm')

    const startsAt = getTimeOfDay(start);
    const endsAt = getTimeOfDay(end);
    const timeDuration = endsAt - startsAt;
    startOfDay.add(index + 1, 'hours')
    if (!startsAtBeginning && index === 0 && props.schedule[index + 1]) {
      let nextSchedule = props.schedules[index + 1]
      const nextStart = nextSchedule.start
      const nextStartsAt = getTimeOfDay(nextStart)
      timeCells.push({ timeLength: nextStartsAt, fillGap: true, start: '', end: '', id: 'gap0', title: '' })
    }
    timeCells.push({ timeLength: timeDuration, title, startsAtBeginning, start, end, id })
  }

  return (
    <div className={`channel-row ${classes.day_row}`}>
      {timeCells.map((cell, i) => <TimeCell key={i} index={i} id={cell.id} timeLength={cell.timeLength} text={cell.title} start={cell.start} end={cell.end} />)}
    </div>
  )
}

export default ChannelData;