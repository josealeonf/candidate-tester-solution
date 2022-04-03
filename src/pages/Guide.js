import { useEffect, useRef, useState } from 'react';
import moment from "moment";
import axios from 'axios';

import StarIcon from '@mui/icons-material/Star';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import classes from './Guide.module.css'
import data from '../data/mock_data.json'
import config from '../config/app.json'
import ChannelHeader from '../guide/ChannelHeader';
import ChannelData from '../guide/ChannelData';
import TimeRow from '../guide/TimeRow';

const Guide = (props) => {
  let { channels } = data;
  const [isLoading, setIsLoading] = useState(true);
  const [channelData, setChannelData] = useState([]);
  const scheduleDataRef = useRef();

  const small = useMediaQuery('(max-width:1439px)');
  const big = useMediaQuery('(min-width:1440px)');

  let unitOfLength = 4;
  if (big) {
    unitOfLength = 6;
  }

  const { dataurl } = config;

  useEffect(() => {
    setIsLoading(true)

    axios
      .get(dataurl, { timeout: 1000 })
      .then(res => {
        const response = res.data;
        //console.log('loaded Chanels', response.channels);
        setIsLoading(false);
        setChannelData(response.channels)

        setTimeout(() => {
          const nowMoment = moment()
          let xCoordinate = ((+nowMoment.format('H') * 60) + (+nowMoment.format('m')) + (small ? -30 : 0)) * unitOfLength
          console.log('scrolling to: ', xCoordinate)
          scheduleDataRef.current.scrollTo({
            top: 0,
            left: xCoordinate,
            behavior: 'smooth'
          })
        }, 1000);

      })
      .catch(err => {
        setIsLoading(false);
        setChannelData(channels)
        console.log(err)
      });
  }, [dataurl, channels, scheduleDataRef, unitOfLength, small])

  //useEffect(() => {
  //  const currentTime = moment()
  //  const timer = setTimeout(() => {
  //    let xCoordinate = ((+currentTime.format('H') * 60) + (+currentTime.format('m')) + (small ? -30 : 0)) * unitOfLength
  //    console.log('scrolling to: ', xCoordinate)
  //    scheduleDataRef.current.scrollTo({
  //      top: 0,
  //      left: xCoordinate,
  //      behavior: 'smooth'
  //    })
  //  }, 1000);
  //  return clearTimeout(timer);

  //}, [scheduleDataRef, unitOfLength, small, isLoading]);
  function nowClicked() {

    const currentTime = moment()
    let xCoordinate = ((+currentTime.format('H') * 60) + (+currentTime.format('m')) + (small ? -30 : 0)) * unitOfLength
    console.log('scrolling to handler: ', xCoordinate)
    scheduleDataRef.current.scrollTo({
      top: 0,
      left: xCoordinate,
      behavior: 'smooth'
    })

  }

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  let loadedChannels = channelData;
  //console.log('final channels: ', loadedChannels)

  return (
    <>
      <Button variant="contained" className={classes.nowButton} size="medium" onClick={nowClicked}>
        NOW
      </Button>
      <div className={classes.guide_container}>
        <div className={classes.channel_container}>
          <div className={classes.channel_data}>
            <div className="channel-header"><StarIcon sx={{ fontSize: 40 }} /></div>
            <div className="channel-time-row"></div>
            {loadedChannels.map((channel, i) => <ChannelHeader key={i} item={i} id={channel.id} title={channel.title} image={channel.images.logo} />)}
          </div>
        </div>
        <div className={classes.content_container}>
          <div className={classes.content_data} ref={scheduleDataRef}>
            <div className="guide-header">
              <div className='guide-header-date'></div>
            </div>
            <div className="guide-time-row"><TimeRow isHeader={true} /></div>
            {loadedChannels.map((channel, i) => <ChannelData key={i} item={i} id={channel.id} totalChannels={loadedChannels.length} title={channel.title} schedules={channel.schedules} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Guide;