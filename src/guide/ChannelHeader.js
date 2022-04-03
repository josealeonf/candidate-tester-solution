import { useState } from "react";
import axios from 'axios';
//import fallbackLogo from '../nm_logo.png';

import TvIcon from '@mui/icons-material/Tv';

const ChannelHeader = (props) => {
  const [image, setImage] = useState(props.image);
  const [showIcon, setShowIcon] = useState(true);

  axios
    .get(props.image, {timeout: 5000})
    .then(res => {
      setImage(props.image);
      setShowIcon(false)
    })
    .catch(err => {
      console.log(err)
      setShowIcon(true)
    });

  const imageStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: 'url(' + image + ')',
  }

  return (

    <div className="channel-row channel-logo"
      style={imageStyle}
      title={props.title}
    >
    {showIcon && <TvIcon sx={{ fontSize: 40 }} />}
    <span>{props.title}</span>
    </div>
  )
}

export default ChannelHeader;