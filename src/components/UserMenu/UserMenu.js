import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import styles from './UserMenu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.UserMenu}>
      <div className={styles.UserName}>
        <img src={avatar} alt="" width="28" className={styles.Avatar} />
        <span className={styles.Name}>{name}</span>
      </div>
      <button
        type="button"
        className={styles.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
