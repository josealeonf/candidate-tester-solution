import { useState } from "react";
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReplayIcon from '@mui/icons-material/Replay';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    color: "#FFFFFF",
    "&$selected": {
      color: "#E1A21E !important"
    }
  },
  selected: {}
}));

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState('home');

  return (
    <Box
      component="footer"
      className="page-footer"
    >
      <BottomNavigation
        sx={{
          backgroundColor: '#212322',
        }}

        value={value} onChange={(event, newValue) => {
          setValue(newValue);
        }}>

        <BottomNavigationAction
          component={Link}
          to="/"
          value="home"
          icon={<HomeIcon />}
          classes={classes}
        />
        <BottomNavigationAction
          component={Link}
          to="/live"
          value="live"
          icon={<LiveTvIcon />}
          classes={classes}
        />
        <BottomNavigationAction
          component={Link}
          to="/guide"
          value="guide"
          icon={<ViewListIcon />}
          classes={classes}
        />
        <BottomNavigationAction
          component={Link}
          to="/replay"
          value="replay"
          icon={<ReplayIcon />}
          classes={classes}
        />
        <BottomNavigationAction
          component={Link}
          to="/collection"
          value="collection"
          icon={<MenuBookIcon />}
          classes={classes}
        />

      </BottomNavigation>
    </Box>
  );
}

export default Footer;