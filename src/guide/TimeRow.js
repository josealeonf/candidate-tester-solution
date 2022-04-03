//import classes from './ChannelData.module.css'

import moment from "moment";
import HeaderTimeCell from "./HeaderTimeCell";
import TimeCell from "./TimeCell";

const TimeRow = (props) => {

  const isHeader = props.isHeader;
  const timeCells = [];
  if (isHeader) {
    for (let index = 0; index < 24; index++) {
      let startOfDay = moment().startOf('day')
      startOfDay.add(index + 1, 'hours')
      timeCells.push({ timeLength: 60, time: startOfDay.format('HH'), momentTime: startOfDay })
    }
  }


  return (
    <div className={`channel-row timeDay`}>
      {timeCells.map((cell, i) => isHeader ?
        <HeaderTimeCell key={i} index={i} timeLength={cell.timeLength} formattedTime={cell.time} time={cell.momentTime} /> :
        <TimeCell key={i} id={i} timeLength={cell.timeLength} text={cell.time} />)}
    </div>
  )
}

export default TimeRow;