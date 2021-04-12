import React from 'react';
import styles from './Header.module.scss';
import {NavLink, useLocation} from 'react-router-dom';
import {HOME_PATH} from "../../../routes/Routes";

const Header:React.FC = () => {
  const location = useLocation();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to={HOME_PATH}
                   className={styles.navLink}
                   activeClassName={`${location.pathname === '/' ? styles.active : ''}`}
          >Home</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header;