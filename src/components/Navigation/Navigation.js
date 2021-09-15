import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
   
    <nav className={styles.Navigation}>
      <ul className={styles.NavList}>
        <li className={styles.NavListItem}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={styles.NavListItem}>
            <NavLink
              to="/contacts"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
    
  );
};

export default Navigation;
