import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import styles from './AppBar.module.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.Header}>
      <div className={styles.AppBar}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
