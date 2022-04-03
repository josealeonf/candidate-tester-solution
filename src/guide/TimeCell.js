import moment from "moment";
import classes from './TimeCell.module.css'

const TimeCell = (props) => {

  const currentTime = moment()
  const startMoment = moment(props.start)
  const endMoment = moment(props.end)

  const currentHour = +(moment().format('H')) * 60
  const currentMinute = +(moment().format('m'))
  const currentAt = currentHour + currentMinute;

  const startHour = +(moment(props.start).format('H')) * 60
  const startMinute = +(moment(props.start).format('m'))
  const startsAt = startHour + startMinute;

  const endHour = +(moment(props.end).format('H')) * 60
  const endMinute = +(moment(props.end).format('m'))
  const endsAt = endHour + endMinute;

  const isAfter = currentAt >= startsAt;
  const isBefore = currentAt <= endsAt;
  const nowIsInCell = isAfter && isBefore;

  const timeLength = props.timeLength;
  const timeVar = `time${timeLength}`
  const isNowClass = nowIsInCell ? classes.playingNow : ''

  const startTime = moment(props.start).format('HH:mm')
  const endTime = moment(props.end).format('HH:mm')
  return (
    <div className={`channel-cell ${classes.timeCell} ${timeVar} ${isNowClass}`}>
      <div className={classes.title}>{props.text}</div>
      <div className={classes.schedule}><span>{startTime}</span> - <span>{endTime}</span></div>
    </div>
  )
}

export default TimeCell;