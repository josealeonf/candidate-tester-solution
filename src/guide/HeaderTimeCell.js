import { useRef } from "react";
import moment from "moment";

import classes from './HeaderTimeCell.module.css'

const HeaderTimeCell = (props) => {

  const nowRef = useRef()
  const currentTime = moment()
  const momentTime = moment(props.time)
  const isAfter = currentTime.isSameOrAfter(momentTime.clone());
  const isBefore = currentTime.isSameOrBefore(momentTime.clone().add(1, 'hours'));
  const nowIsInCell = isAfter && isBefore;

  const nowStyle = {
    left: 'calc(var(--unit-time-length) * ' + (+currentTime.clone().format('m') + 60 ) + ')'
  }

  const timeLength = props.timeLength;
  const timeVar = `time${timeLength}`
  //const headerClass = props.index === 0 || props.index === 23 ? classes.headerCellHidden : ''
  const headerText = props.index === 0 ? ' ' : '00'

  return (
    <>
      { nowIsInCell && <div style={nowStyle} ref={nowRef} className='nowTime' title={currentTime.format('HH:mm')} /> }
      <div className={`channel-cell ${classes.timeCell} ${timeVar} ${classes.headerCell}`}>
        <span>{headerText}</span>
        <span>{props.formattedTime}:</span>
      </div>
    </>
  )
}

export default HeaderTimeCell;