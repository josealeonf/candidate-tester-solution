import { Link } from 'react-router-dom';
import moment from "moment";

import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

import classes from './Header.module.css';
import logoImage from '../nm_logo.png';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const today = moment()
  const dateStyle = {
    position: 'fixed',
    left: 'calc(100vw/2 - 25px)',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    <>
      <header className={`page-header ${classes.header}`}>
        <Link to='/'><PersonIcon /></Link>
        <Link to='/guide'><img src={logoImage} alt="logo" /></Link>
        <Link to='/'><SearchIcon /></Link>
      </header>
      {
        location.pathname.includes('guide') &&
        <div style={dateStyle} className="textCenter">
          <div>{today.format('ddd')}</div>
          <div>{today.format('DD.MM')}</div>
        </div>
      }
    </>
  );
}

export default Header;