import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import addressBook from './address-book.png';

import styles from './HomeView.module.scss';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const avatar = addressBook;

  return (
    <div className={styles.HomeView}>
      <h1 className={styles.Title}>Welcome to application</h1>

      <img src={avatar} alt="" width="280" />

      {!isLoggedIn && (
        <p className={styles.IconPhonebook}>
          <span className={styles.mainToDo}>sign up</span> and{' '}
          <span className={styles.mainToDo}>log in</span> <br />
          to use all the features of the app.
        </p>
      )}
    </div>
  );
};

export default HomeView;
